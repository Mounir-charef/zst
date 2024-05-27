import { memo } from 'react';
import EmailForm from './_components/EmailForm';
import PasswordForm from './_components/PasswordForm';
import SettingsForm from './_components/SettingsForm';
import BoundedSectionWrapper from '../../../../components/common/BoundedSectionWrapper';
import PageTitle from '../../../../components/common/PageTitle';
import { FormCardsWrapper } from '@mono/ui';

const page = () => {
  return (
    <FormCardsWrapper>
      <EmailForm />
      <SettingsForm />
      <PasswordForm />
    </FormCardsWrapper>
  );
};

export default memo(page);
