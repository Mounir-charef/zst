'use client';
import { memo, useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Form, InputField } from '@mono/ui';

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
      <div className="flex flex-wrap border-b border-dashed border-border-base pb-8 py-5">
        <div className="sm:pe-4 md:pe-5 w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
          <h4 className="text-base font-semibold mb-2">Email Address</h4>
          <p className="text-sm text-muted-foreground">
            Update your email address to receive important notifications.
          </p>
        </div>
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
      </div>
    </Form>
  );
};

export default memo(EmailForm);
