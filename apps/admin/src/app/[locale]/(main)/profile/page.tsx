import { memo } from 'react';
import EmailForm from './_components/EmailForm';
import PasswordForm from './_components/PasswordForm';

const page = () => {
  return (
    <div>
      <div className="border-b border-dashed pb-5 border-border">
        <h1 className="text-lg font-semibold text-heading">Profile Settings</h1>
      </div>
      <EmailForm />
      <PasswordForm />
    </div>
  );
};

export default memo(page);
