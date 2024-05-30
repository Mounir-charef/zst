import { getAuthSession } from '../../../lib/auth/auth';
import { redirect } from '../../../navigation';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();

  if (session && !session.error) {
    redirect('/');
  }

  return <main className="flex h-full w-full flex-col">{children}</main>;
}
