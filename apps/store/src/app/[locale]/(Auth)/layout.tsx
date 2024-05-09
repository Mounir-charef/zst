export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="dark flex h-full w-full flex-col">{children}</main>;
}
