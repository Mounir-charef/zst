import axios from 'axios';
import { getAuthSession } from './auth/auth';
import 'server-only';

export async function getAccessToken() {
  const session = await getAuthSession();
  return session === null || session === void 0
    ? void 0
    : session.user.accessToken;
}

export async function getAxioxInstance() {
  const accessToken = await getAccessToken();
  return axios.create({
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });
}
