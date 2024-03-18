'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, CheckBoxField, Form, InputField, PasswordField } from '@mono/ui';
import { Lock, Mail, Phone, UserCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Link } from '../../navigation';

const SignUp = ({
  setShowSignIn,
}: {
  setShowSignIn: (showSignIn: boolean) => void;
}) => {
  const t = useTranslations('auth.sign-up');

  const SignUpSchema = useMemo(
    () =>
      z.object({
        firstName: z
          .string({
            invalid_type_error: t('errors.name.invalid_type_error'),
            required_error: t('errors.name.required_error'),
          })
          .min(2, t('errors.name.min_length'))
          .max(50, t('errors.name.max_length')),
        lastName: z
          .string({
            invalid_type_error: t('errors.name.invalid_type_error'),
            required_error: t('errors.name.required_error'),
          })
          .min(2, t('errors.name.min_length'))
          .max(50, t('errors.name.max_length')),
        phone: z
          .string({
            invalid_type_error: t('errors.phone.invalid_type_error'),
            required_error: t('errors.phone.required_error'),
          })
          .min(6, t('errors.phone.min_length')),
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
        acceptTerms: z.literal(true, {
          errorMap: () => ({ message: t('errors.acceptTerms.required_error') }),
        }),
      }),
    [t]
  );

  type SignUp = z.infer<typeof SignUpSchema>;

  const form = useForm<SignUp>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<SignUp> = (payload) => {
    console.log(payload);
  };

  return (
    <div className="w-full space-y-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <div className="flex gap-4">
            <InputField
              className="flex-1"
              control={form.control}
              name="firstName"
              Icon={UserCircle2}
              placeholder={t('firstName')}
            />
            <InputField
              className="flex-1"
              control={form.control}
              name="lastName"
              Icon={UserCircle2}
              placeholder={t('lastName')}
            />
          </div>
          <InputField
            control={form.control}
            name="phone"
            Icon={Phone}
            placeholder={t('phone')}
          />
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

          <CheckBoxField
            control={form.control}
            name="acceptTerms"
            label={
              <p className="text-muted-foreground">
                {t.rich('acceptTerms', {
                  link: (chunks) => (
                    <Link href="#" className="text-primary">
                      {chunks}
                    </Link>
                  ),
                })}
              </p>
            }
          />

          <Button type="submit" className="w-full">
            {t('sign-up')}
          </Button>
        </form>
      </Form>
      <span className="inline-block w-full text-center text-sm">
        {t('already-have-account')}{' '}
        <p
          onClick={() => setShowSignIn(true)}
          className="ms-2 font-medium text-primary hover:underline"
        >
          {t('sign-in')}
        </p>
      </span>
    </div>
  );
};

export default SignUp;
