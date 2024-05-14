'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Form, InputField, PasswordField } from '@mono/ui';
import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';
import { memo, useMemo, useTransition } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Link, useRouter } from '../../../../navigation';
import GoogleIcon from '../../../../assets/icons/GoogleIcon';

const LoginForm = () => {
  const router = useRouter();
  const [isRedirecting, startTransition] = useTransition();
  const { mutate, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      console.log(res);
      if (res?.error) {
        throw new Error(res.error);
      }

      return res;
    },
    onError(error) {
      console.log(error);
      toast.error(error.message);
    },
    onSuccess() {
      toast.success(
        'You have successfully signed in. Redirecting you to the dashboard...',
      );
      startTransition(() => {
        router.push('/');
      });
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
    mutate(values);
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
        <div className="space-y-4">
          <Button
            disabled={isPending}
            isLoading={isPending || isRedirecting}
            type="submit"
            className="w-full gap-2"
          >
            Login
          </Button>
          <Button
            variant="outline"
            disabled
            type="button"
            className="w-full gap-2"
          >
            <GoogleIcon /> Login with Google
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default memo(LoginForm);
