import { cookies } from 'next/headers';
import { env } from '../../../../env.mjs';

export async function POST() {
  const refreshToken = cookies().get(`xxx.refresh-token` as any)?.value;
  // change it with your own endpoint
  const res = await fetch(`${env.NEXT_PUBLIC_BACKEND_API}/auth/refresh-token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  const data = await res.json();

  if (res.ok) {
    cookies().set({
      name: 'xxx.refresh-token',
      value: data.refreshToken,
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
    });
  }

  return Response.json({
    success: res.ok,
    status: res.status,
    data,
  });
}
