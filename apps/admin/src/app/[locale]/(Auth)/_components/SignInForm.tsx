'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Form,
  Input,
  InputField,
  Label,
  PasswordField,
} from '@mono/ui';
import { memo, useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Link } from '../../../../navigation';
import { signIn } from 'next-auth/react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const LoginForm = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => signIn('credentials', { username, password, callbackUrl: '/' }),
    onError() {
      toast.error(
        'An error occurred while trying to sign in. Please try again.',
      );
    },
    onSuccess() {
      toast.success(
        'You have successfully signed in. Redirecting you to the dashboard...',
      );
    },
  });

  const schema = useMemo(
    () =>
      z.object({
        email: z.string().email(),
        password: z.string().min(6),
      }),
    [],
  );

  type LoginFormValues = z.infer<typeof schema>;

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const submit: SubmitHandler<LoginFormValues> = (values) => {
    console.log(values);
    mutate({
      username: 'kminchelle',
      password: '0lelplR',
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="grid gap-8">
        <InputField
          control={form.control}
          name="email"
          label="Email"
          placeholder="Enter your email address"
          required
        />

        <div className="relative">
          <PasswordField
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter your password"
            required
          />
          <Link
            href="/forgot-password"
            className="absolute right-0 top-0 inline-block text-sm underline"
          >
            Forgot your password?
          </Link>
        </div>
        <Button disabled={isPending} type="submit" className="w-full gap-2">
          Login
          {isPending && <Loader2 className="animate-spin" size={20} />}
        </Button>
      </form>
    </Form>
  );
};

export default memo(LoginForm);
