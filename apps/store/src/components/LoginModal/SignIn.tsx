'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Alert,
  AlertDescription,
  Button,
  CheckBoxField,
  Form,
  InputField,
  PasswordField,
} from '@mono/ui';
import { Lock, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Link } from '../../navigation';

const SignIn = ({
  setShowSignIn,
}: {
  setShowSignIn: (showSignIn: boolean) => void;
}) => {
  const t = useTranslations('auth.sign-in');

  const loginSchema = useMemo(
    () =>
      z.object({
        email: z
          .string({
            invalid_type_error: t('errors.email.invalid_type_error'),
            required_error: t('errors.email.required_error'),
          })
          .email(t('errors.email.invalid_type_error')),
        password: z
          .string({
            required_error: t('errors.password.required_error'),
          })
          .min(6, t('errors.password.min_length')),
        rememberMe: z.boolean().optional(),
      }),
    [t]
  );

  type Login = z.infer<typeof loginSchema>;

  const form = useForm<Login>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit: SubmitHandler<Login> = (payload) => {
    console.log(payload);
  };

  return (
    <div className="w-full space-y-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <InputField
            control={form.control}
            name="email"
            Icon={Mail}
            placeholder={t('email')}
          />
          <PasswordField
            control={form.control}
            name="password"
            Icon={Lock}
            placeholder={t('password')}
          />
          <div className="flex items-center justify-between">
            <CheckBoxField
              control={form.control}
              name="rememberMe"
              label={t('remember-me')}
            />
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-primary hover:underline"
            >
              {t('forgot-password')}
            </Link>
          </div>

          <Button type="submit" className="w-full">
            {t('sign-in')}
          </Button>
        </form>
      </Form>
      <span className="inline-block w-full text-center text-sm">
        {t('dont-have-account')}{' '}
        <div
          aria-label={t('sign-up')}
          role="button"
          onClick={() => setShowSignIn(false)}
          className="ms-2 font-medium text-primary hover:underline"
        >
          {t('sign-up')}
        </div>
      </span>
    </div>
  );
};

export default SignIn;
