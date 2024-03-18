'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { ResponsiveModel } from './ResponsiveModal';
import SignIn from './SignIn';
import SignUp from './SignUp';

const AuthModal = ({ defaultLogin = true }: { defaultLogin?: boolean }) => {
  const t = useTranslations('auth');
  const [showSignIn, setShowSignIn] = useState(defaultLogin);
  return (
    <ResponsiveModel
      trigger={defaultLogin ? t('sign-in.title') : t('sign-up.title')}
    >
      <div className="mx-auto w-full max-w-md space-y-6 rounded py-2 sm:p-4 sm:pt-0">
        <h1 className="text-center text-3xl font-bold">
          {showSignIn ? t('sign-in.title') : t('sign-up.title')}
        </h1>
        {showSignIn ? (
          <SignIn setShowSignIn={setShowSignIn} />
        ) : (
          <SignUp setShowSignIn={setShowSignIn} />
        )}
      </div>
    </ResponsiveModel>
  );
};

export default AuthModal;
