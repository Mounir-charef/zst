import { auth } from '../../../lib/auth/auth';
import { redirect } from '../../../navigation';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (session && session.user) {
    redirect('/');
  }

  return <main className="flex h-full w-full flex-col">{children}</main>;
}
