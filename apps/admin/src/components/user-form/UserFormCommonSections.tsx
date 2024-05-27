import React from 'react';
import { Control } from 'react-hook-form';
import UserFormAvatar from './UserFormAvatar';
import UserFormPersonalInfo from './UserFormPersonalInfo';
import UserFormPassword from './UserFormPassword';

const UserFormCommonSections = ({ control }: { control: Control }) => {
  return (
    <>
      <UserFormAvatar control={control} />
      <UserFormPersonalInfo control={control} />
      <UserFormPassword control={control} />
    </>
  );
};

export default UserFormCommonSections;
