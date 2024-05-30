'use client';
import { memo, useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Form,
  InputField,
} from '@mono/ui';

const EmailForm = () => {
  const schema = useMemo(
    () =>
      z.object({
        email: z.string().email(),
      }),
    [],
  );

  type FormValues = z.infer<typeof schema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
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
            <CardTitle>Email</CardTitle>
          </CardHeader>
          <CardContent>
            <InputField
              control={form.control}
              name="email"
              label="Email"
              className="mb-5"
              placeholder="Enter your email address"
            />
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};

export default memo(EmailForm);
