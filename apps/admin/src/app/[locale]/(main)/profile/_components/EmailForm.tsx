'use client';
import { memo, useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Form, InputField } from '@mono/ui';
import ProfileCell from './ProfileCell';

const EmailForm = () => {
  const schema = useMemo(
    () =>
      z.object({
        email: z.string().email(),
      }),
    []
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
      <ProfileCell title="Email" description="Change your email from here">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full sm:w-8/12 md:w-2/3"
        >
          <div className="bg-background md:p-8 p-5 shadow rounded">
            <InputField
              control={form.control}
              name="email"
              label="Email"
              className="mb-5"
              placeholder="Enter your email address"
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
