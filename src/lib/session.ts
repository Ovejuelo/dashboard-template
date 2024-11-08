'use server';

import { redirect } from 'next/navigation';
import { jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { jwtConfig } from '@/app/api/signup/db';

const secretKey = jwtConfig.secret;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1hr')
    .sign(key);
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ['HS256']
    });
    return payload;
  } catch (error) {
    return error;
  }
}

export async function createSession(token: string) {
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

  (await cookies()).set('session', token, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/'
  });

  redirect('/dashboard');
}

export async function deleteSession() {
  (await cookies()).delete('session');
  redirect('/login');
}
