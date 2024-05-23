import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import { getAuthSession } from '../../../lib/auth/auth';
import { redirect } from '../../../navigation';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getAuthSession();
  if (!session || session.error) {
    redirect('/sign-in');
  }
  return (
    <div className="flex h-full w-full">
      <aside className="hidden w-64 flex-col bg-gray-800 text-white sm:flex"></aside>
      <main className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
