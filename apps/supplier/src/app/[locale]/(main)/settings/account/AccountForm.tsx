'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, ComboBoxField, DateField, Form, InputField } from '@mono/ui';
import { toast } from 'sonner';
import { memo } from 'react';

const languages = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Russian', value: 'ru' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Korean', value: 'ko' },
  { label: 'Chinese', value: 'zh' },
] satisfies {
  label: string;
  value: string;
}[];

const accountFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.',
    }),
  dob: z.date({
    required_error: 'A date of birth is required.',
  }),
  language: z.string({
    required_error: 'Please select a language.',
  }),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

const defaultValues: Partial<AccountFormValues> = {
  dob: new Date('2023-01-23'),
};

function AccountForm() {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  function onSubmit(data: AccountFormValues) {
    toast.message(JSON.stringify(data, null, 2));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <InputField
          control={form.control}
          name="name"
          label="Name"
          placeholder="Your name"
          description="This is the name that will be displayed on your profile and in
                emails."
        />

        <DateField
          control={form.control}
          name="dob"
          label="Date of birth"
          description="Your date of birth is used to calculate your age."
        />

        <ComboBoxField
          control={form.control}
          name="language"
          options={languages}
          label="Language"
          placeholder="Select language"
          description="This is the language that will be used in the dashboard."
        />
        <Button type="submit">Update account</Button>
      </form>
    </Form>
  );
}

export default memo(AccountForm);
