import { cookies } from 'next/headers';

export async function POST() {
  cookies().delete('xxx.refresh-token');
  return Response.json({
    status: 200,
    success: true,
  });
}
