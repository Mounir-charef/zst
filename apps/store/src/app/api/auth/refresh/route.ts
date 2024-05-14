import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const refreshToken = cookies().get(`xxx.refresh-token` as any)?.value;

  // change it with your own endpoint
  const res = await fetch(`${process.env.API_BASE_URL}/auth/refresh-token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  const data = await res.json();

  return Response.json({
    success: res.ok,
    status: res.status,
    data,
  });
}
