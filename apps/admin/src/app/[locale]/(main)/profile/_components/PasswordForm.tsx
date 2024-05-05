'use client';
import { memo, useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Form, InputField, PasswordField } from '@mono/ui';
import ProfileCell from './ProfileCell';

const EmailForm = () => {
  const schema = useMemo(
    () =>
      z
        .object({
          oldPassword: z.string().min(8),
          newPassword: z.string().min(8),
          confirmPassword: z.string().min(8),
        })
        .refine((data) => data.newPassword === data.confirmPassword, {
          message: 'Passwords do not match',
          path: ['confirmPassword'],
        }),
    []
  );

  type FormValues = z.infer<typeof schema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <ProfileCell
        title="Password"
        description="Change your password from here"
      >
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full sm:w-8/12 md:w-2/3"
        >
          <div className="bg-background md:p-8 p-5 shadow rounded">
            <PasswordField
              control={form.control}
              name="oldPassword"
              label="Old Password"
              className="mb-5"
            />
            <PasswordField
              control={form.control}
              name="newPassword"
              label="New Password"
              className="mb-5"
            />
            <PasswordField
              control={form.control}
              name="confirmPassword"
              label="Confirm Password"
              className="mb-5"
            />
          </div>
          <div className="w-full flex justify-end">
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </ProfileCell>
    </Form>
  );
};

export default memo(EmailForm);
