'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Button,
  CheckBoxField,
  Checkbox,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  RadioGroup,
  RadioGroupField,
  RadioGroupItem,
  Switch,
  SwitchField,
} from '@mono/ui';
import { toast } from 'sonner';

const notificationsFormSchema = z.object({
  type: z.enum(['all', 'mentions', 'none'], {
    required_error: 'You need to select a notification type.',
  }),
  mobile: z.boolean().default(false).optional(),
  communication_emails: z.boolean().default(false).optional(),
  social_emails: z.boolean().default(false).optional(),
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
});

type NotificationsFormValues = z.infer<typeof notificationsFormSchema>;

const typeOptions = [
  { label: 'All new messages', value: 'all' },
  { label: 'Direct messages and mentions', value: 'mentions' },
  { label: 'Nothing', value: 'none' },
];

// This can come from your database or API.
const defaultValues: Partial<NotificationsFormValues> = {
  communication_emails: false,
  marketing_emails: false,
  social_emails: true,
  security_emails: true,
};

export function NotificationsForm() {
  const form = useForm<NotificationsFormValues>({
    resolver: zodResolver(notificationsFormSchema),
    defaultValues,
  });

  function onSubmit(data: NotificationsFormValues) {
    toast.info(JSON.stringify(data, null, 2));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <RadioGroupField
          control={form.control}
          name="type"
          options={typeOptions}
          label="Notify me about..."
        />
        <div>
          <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
          <div className="space-y-4">
            <SwitchField
              control={form.control}
              name="communication_emails"
              label="Communication emails"
              description="Receive emails about your account activity."
              className="justify-between rounded-lg border p-4"
            />

            <SwitchField
              control={form.control}
              name="marketing_emails"
              label="Marketing emails"
              description="Receive emails about new products, features, and more."
              className="justify-between rounded-lg border p-4"
            />

            <SwitchField
              control={form.control}
              name="social_emails"
              label="Social emails"
              description="Receive emails for friend requests, follows, and more."
              className="justify-between rounded-lg border p-4"
            />
            <SwitchField
              control={form.control}
              name="security_emails"
              label="Security emails"
              description="Receive emails about your account activity and security."
              className="justify-between rounded-lg border p-4"
            />
          </div>
        </div>

        <CheckBoxField
          control={form.control}
          name="mobile"
          label="Use different settings for my mobile devices"
          description={
            <>
              You can manage your mobile notifications in the{' '}
              <Link href="/examples/forms">mobile settings</Link> page.
            </>
          }
        />
        <Button type="submit">Update notifications</Button>
      </form>
    </Form>
  );
}
