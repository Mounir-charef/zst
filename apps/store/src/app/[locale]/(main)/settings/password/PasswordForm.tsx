'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Form, PasswordField } from '@mono/ui';
import { memo } from 'react';
import { toast } from 'sonner';

const PasswordFormSchema = z
  .object({
    current_password: z.string().min(8, {
      message: 'Password must be at least 8 characters.',
    }),
    new_password: z.string().min(8, {
      message: 'Password must be at least 8 characters.',
    }),
    confirm_password: z.string().min(8, {
      message: 'Password must be at least 8 characters.',
    }),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: 'Passwords do not match.',
    path: ['confirm_password'],
  });

type PasswordFormValues = z.infer<typeof PasswordFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<PasswordFormValues> = {
  current_password: '',
  new_password: '',
  confirm_password: '',
};

function PasswordForm() {
  const form = useForm<PasswordFormValues>({
    resolver: zodResolver(PasswordFormSchema),
    defaultValues,
  });

  function onSubmit(data: PasswordFormValues) {
    toast.info(JSON.stringify(data, null, 2));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <PasswordField
          control={form.control}
          name="current_password"
          label="Current Password"
          placeholder="Enter your current password"
        />
        <PasswordField
          control={form.control}
          name="new_password"
          label="New Password"
          placeholder="Enter your new password"
        />
        <PasswordField
          control={form.control}
          name="confirm_password"
          label="Confirm Password"
          placeholder="Confirm your new password"
        />
        <Button type="submit">Save Changes</Button>
      </form>
    </Form>
  );
}

export default memo(PasswordForm);
