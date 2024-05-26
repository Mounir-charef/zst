'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  InputField,
  SelectField,
  TextAreaField,
} from '@mono/ui';
import { toast } from 'sonner';
import { Link } from '../../../../../navigation';
import { cn } from '@mono/util';

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.',
    }),
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: 'Please enter a valid URL.' }),
      }),
    )
    .optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {
  bio: 'I own a computer.',
  urls: [
    { value: 'https://shadcn.com' },
    { value: 'http://twitter.com/shadcn' },
  ],
};

const emailOptions = [
  {
    value: 'm@example.com',
    label: 'm@example.com',
  },
  {
    value: 'm@google.com',
    label: 'm@google.com',
  },
  {
    value: 'm@support.com',
    label: 'm@support.com',
  },
];

export function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { fields, append } = useFieldArray({
    name: 'urls',
    control: form.control,
  });

  function onSubmit(data: ProfileFormValues) {
    toast.info(JSON.stringify(data, null, 2));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <InputField
          control={form.control}
          name="username"
          label="Username"
          placeholder="shadcn"
          description="This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days."
        />

        <SelectField
          control={form.control}
          name="email"
          label="Email"
          options={emailOptions}
          description={
            <>
              You can manage verified email addresses in your{' '}
              <Link href="/settings">email settings</Link>.
            </>
          }
        />
        <TextAreaField
          control={form.control}
          name="bio"
          label="Bio"
          description={
            <>
              You can <span>@mention</span> other users and organizations to
              link to them.
            </>
          }
        />
        <div>
          {fields.map((field, index) => (
            <InputField
              control={form.control}
              key={field.id}
              name={`urls.${index}.value`}
              label="URLs"
              placeholder="https://example.com"
              description="Add links to your website, blog, or social media profiles."
              descriptionProps={{
                className: cn(index !== 0 && 'sr-only'),
              }}
            />
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => append({ value: '' })}
          >
            Add URL
          </Button>
        </div>
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  );
}
