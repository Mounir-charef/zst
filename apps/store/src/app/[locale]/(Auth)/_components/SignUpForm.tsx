'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Form, InputField, PasswordField } from '@mono/ui';
import { memo, useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import GoogleIcon from '../../../assets/GoogleIcon';

const SignUpForm = () => {
  const schema = useMemo(
    () =>
      z
        .object({
          fullName: z.string().min(3),
          email: z.string().email(),
          password: z.string().min(6),
          confirmPassword: z.string().min(6),
        })
        .refine((data) => data.password === data.confirmPassword, {
          message: 'Passwords do not match',
          path: ['confirmPassword'],
        }),
    [],
  );

  type SignUpFormValues = z.infer<typeof schema>;

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const submit: SubmitHandler<SignUpFormValues> = (values) => {
    // TODO: Implement sign-up logic
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="grid gap-8">
        <InputField
          control={form.control}
          name="fullName"
          label="Full Name"
          placeholder="Enter your full name"
          required
        />

        <InputField
          control={form.control}
          name="email"
          label="Email"
          placeholder="Enter your email address"
          required
        />

        <PasswordField
          control={form.control}
          name="password"
          label="Password"
          placeholder="Enter your password"
          required
        />

        <PasswordField
          control={form.control}
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your password"
          required
        />

        <div className="space-y-4">
          <Button type="submit" className="w-full gap-2">
            SignUp
          </Button>
          <Button
            variant="outline"
            disabled
            type="button"
            className="w-full gap-2"
          >
            <GoogleIcon /> SignUp with Google
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default memo(SignUpForm);
