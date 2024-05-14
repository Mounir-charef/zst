import { getAuthSession } from '../../../lib/auth/auth';
import { redirect } from '../../../navigation';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();

  if (session) {
    redirect('/');
  }

  return (
    <main className="bg-background border-border text-foreground dark flex h-full w-full flex-col px-2">
      {children}
    </main>
  );
}
