'use client';

import {
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from '@radix-ui/react-icons';

export const filterOptions = [
  {
    column: 'status',
    title: 'Status',
    options: [
      {
        value: 'backlog',
        label: 'Backlog',
        icon: QuestionMarkCircledIcon,
      },
      {
        value: 'todo',
        label: 'Todo',
        icon: CircleIcon,
      },
      {
        value: 'in progress',
        label: 'In Progress',
        icon: StopwatchIcon,
      },
      {
        value: 'done',
        label: 'Done',
        icon: CheckCircledIcon,
      },
      {
        value: 'canceled',
        label: 'Canceled',
        icon: CrossCircledIcon,
      },
    ],
  },
];
