import { memo } from 'react';
import EmailForm from './_components/EmailForm';

const page = () => {
  return (
    <div>
      <div className="border-b border-dashed pb-5 border-border">
        <h1 className="text-lg font-semibold text-heading">Profile Settings</h1>
      </div>
      <EmailForm />
    </div>
  );
};

export default memo(page);
