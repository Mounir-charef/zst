'use client';
import { memo, useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Form,
  InputField,
  PasswordField,
} from '@mono/ui';
import ProfileCell from './ProfileCell';
import BoundedSectionWrapper from '../../../../../components/common/BoundedSectionWrapper';
import FormSection from '../../../../../components/ui/form/formSection/FormSection';
import ProfileSubmitButton from './ProfileSubmitButton';

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
    [],
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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PasswordField
              control={form.control}
              name="oldPassword"
              label="Old Password"
            />
            <PasswordField
              control={form.control}
              name="newPassword"
              label="New Password"
            />
            <PasswordField
              control={form.control}
              name="confirmPassword"
              label="Confirm Password"
            />
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};

export default memo(EmailForm);
