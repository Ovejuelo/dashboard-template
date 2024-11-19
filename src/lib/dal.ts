import 'server-only';

import { cache } from 'react';
import { verifySession } from './session';
import { authDB } from '@/app/api/signup/db';

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const data = authDB.users.find(item => item.uuid === session.userId);
    const user = data;
    return user;
  } catch (error) {
    console.log('Failed to fetch user', error);
    return null;
  }
});
