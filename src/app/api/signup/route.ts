import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

import { generateGUID } from '@/utils/board-utils';
import { authDB, jwtConfig } from './db';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { username, email, password } = data;
  const isEmailExists = authDB.users.find(_user => _user.data.email === email);

  const error = {
    email: isEmailExists ? 'The email is already in use' : null,
    displayName: username === '' ? 'Enter display name' : null,
    password: null
  };

  if (!error.displayName && !error.password && !error.email) {
    const newUser = {
      uuid: generateGUID(),
      from: 'custom-db',
      role: 'admin',
      password,
      data: { displayName: username, email, theme: 'dark' }
    };

    authDB.users.push(newUser);

    const access_token = jwt.sign({ id: newUser.uuid }, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn
    });

    return NextResponse.json({
      user: newUser,
      access_token
    });
  } else return NextResponse.json(error, { status: 400 });
}
