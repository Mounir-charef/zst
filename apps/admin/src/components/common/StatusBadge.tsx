import React from 'react';
import { TypedStatus } from '../../types/status';
import { Badge } from '@mono/ui';
import { statusesKeys } from '../../data/statuses';

const StatusBadge = ({ status }: { status: TypedStatus }) => {
  const content = {
    [statusesKeys.ACTIVE]: {
      text: 'Active',
      variant: 'success',
    },
    [statusesKeys.INACTIVE]: {
      text: 'Inactive',
      variant: 'outline',
    },
  };
  return (
    <Badge variant={content[status].variant as 'success' | 'outline'}>
      {content[status].text}
    </Badge>
  );
};

export default StatusBadge;
