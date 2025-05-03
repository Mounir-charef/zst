import ProgressBar from '../../../components/ProgressBar';
import NavBar from '../../../components/navbar/NavBar';
import { auth } from '../../../lib/auth/auth';
import { redirect } from '../../../navigation';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session || !session.user) {
    redirect('/sign-in');
  }
  return (
    <main className="bg-muted/40 flex min-h-full w-full flex-col pt-20">
      <NavBar />
      <ProgressBar />
      <div className="mx-auto w-full max-w-7xl flex-grow flex-col px-2 py-12 sm:py-6">
        {children}
      </div>
    </main>
  );
}
