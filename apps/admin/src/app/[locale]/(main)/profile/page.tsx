import { memo } from 'react';
import EmailForm from './_components/EmailForm';
import PasswordForm from './_components/PasswordForm';
import SettingsForm from './_components/SettingsForm';

const page = () => {
  return (
    <div>
      <div className="border-border border-b border-dashed pb-5">
        <h1 className="text-heading text-lg font-semibold">Profile Settings</h1>
      </div>
      <EmailForm />
      <SettingsForm />
      <PasswordForm />
    </div>
  );
};

export default memo(page);
