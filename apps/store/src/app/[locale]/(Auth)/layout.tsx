export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-background border-border text-foreground dark flex h-full w-full flex-col px-2">
      {children}
    </main>
  );
}
