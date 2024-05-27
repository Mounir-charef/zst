import React from 'react';
import { Control } from 'react-hook-form';
import UserFormAvatar from './UserFormAvatar';
import UserFormPersonalInfo from './UserFormPersonalInfo';
import UserFormPassword from './UserFormPassword';
import { FormCardsWrapper } from '@mono/ui';

const UserFormCommonSections = ({ control }: { control: Control }) => {
  return (
    <FormCardsWrapper>
      <UserFormAvatar control={control} />
      <UserFormPersonalInfo control={control} />
      <UserFormPassword control={control} />
    </FormCardsWrapper>
  );
};

export default UserFormCommonSections;
