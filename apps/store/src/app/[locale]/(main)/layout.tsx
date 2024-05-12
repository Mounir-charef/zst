import NavBar from '../../../components/navbar/NavBar';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-full w-full flex-col">
      <NavBar />
      <div className="mx-auto w-full max-w-6xl flex-grow flex-col py-12 sm:py-6">
        {children}
      </div>
    </main>
  );
}
