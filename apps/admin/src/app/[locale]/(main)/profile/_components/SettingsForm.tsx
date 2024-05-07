'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, InputField, SwitchField } from '@mono/ui';
import { memo, useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import FileUploaderField from '../../../../../components/ui/form/fileUploader/FileUploaderField';
import ProfileCell from './ProfileCell';

const PasswordForm = () => {
  const schema = useMemo(
    () =>
      z.object({
        avatar: z.any().optional(),
        notifications: z.object({
          email: z.string().email(),
          enable: z.boolean(),
        }),
        informations: z.object({
          name: z.string().min(2).max(50),
          bio: z.string().min(2).max(255),
          phone: z.string().min(10).max(10),
        }),
      }),
    [],
  );

  type FormValues = z.infer<typeof schema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      avatar: null,
      notifications: {
        email: '',
        enable: false,
      },
      informations: {
        name: '',
        bio: '',
        phone: '',
      },
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <ProfileCell
          title="Avatar"
          description="Upload your profile image from here. Dimension of the avatar should be 140 x 140px"
        >
          <div className="w-full space-y-4 sm:w-8/12 md:w-2/3">
            <div className="bg-background rounded p-5 shadow md:p-8">
              <FileUploaderField
                control={form.control}
                name="avatar"
                className="mb-5"
                multiple
              />
            </div>
          </div>
        </ProfileCell>

        <ProfileCell
          title="Email Notification"
          description="Set your email notification for messaging feature"
        >
          <div className="w-full space-y-4 sm:w-8/12 md:w-2/3">
            <div className="bg-background space-y-5 rounded p-5 shadow md:p-8">
              <InputField
                control={form.control}
                name="notifications.email"
                label="Notification Email"
                placeholder="Enter your email address to receive notifications"
              />
              <SwitchField
                control={form.control}
                name="notifications.enable"
                label="Enable Notification"
              />
            </div>
          </div>
        </ProfileCell>

        <ProfileCell
          title="Information"
          description="Add your profile information from here"
        >
          <div className="w-full space-y-4 sm:w-8/12 md:w-2/3">
            <div className="bg-background rounded p-5 shadow md:p-8">
              <FileUploaderField
                control={form.control}
                name="avatar"
                className="mb-5"
                multiple
              />
            </div>
          </div>
        </ProfileCell>
      </form>
    </Form>
  );
};

export default memo(PasswordForm);
