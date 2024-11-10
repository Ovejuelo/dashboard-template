import jwt from 'jsonwebtoken';
import { authDB, jwtConfig } from '../signup/db';
import _ from 'lodash';

export async function POST(req: Request) {
  const data = await req.json();
  const { email, password } = data;
  const errorMessage = 'Check your email or password';

  const user = _.cloneDeep(authDB.users.find(user => user.data.email === email)) as any;

  const error = {
    message: user && user.password === password ? null : errorMessage
  };

  if (!error.message) {
    const access_token = jwt.sign({ id: user?.uuid }, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn
    });

    delete user?.password;
    delete user?.from;
    delete user?.uuid;

    const response = {
      user: user,
      access_token: access_token
    };

    return Response.json(response);
  } else {
    return Response.json(error);
  }
}
