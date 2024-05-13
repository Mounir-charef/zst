import { memo } from 'react';
import EmailForm from './_components/EmailForm';
import PasswordForm from './_components/PasswordForm';
import SettingsForm from './_components/SettingsForm';
import BoundedSectionWrapper from '../../../../components/common/BoundedSectionWrapper';
import PageTitle from '../../../../components/common/PageTitle';

const page = () => {
  return (
    <>
      <BoundedSectionWrapper noSpacing>
        <PageTitle>Profile Settings</PageTitle>
      </BoundedSectionWrapper>
      <EmailForm />
      <SettingsForm />
      <PasswordForm />
    </>
  );
};

export default memo(page);
