'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Form,
  InputField,
  PhoneInputField,
  SwitchField,
  TextAreaField,
} from '@mono/ui';
import { memo, useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import FileUploaderField from '../../../../../components/ui/form/fileUploader/FileUploaderField';
import ProfileCell from './ProfileCell';
import { emptyStringToUndefined } from '../../../../../lib/emrtyStringToUndefined';
import BoundedSectionWrapper from '../../../../../components/common/BoundedSectionWrapper';
import FormSection from '../../../../../components/ui/form/formSection/FormSection';
import { Card, CardContent } from '../../../../../components/ui/Card';
import FormFieldsWrapper from '../../../../../components/ui/form/FormFieldsWrapper';
import ProfileSubmitButton from './ProfileSubmitButton';

const PasswordForm = () => {
  const schema = useMemo(
    () =>
      z.object({
        avatar: z.any().optional(),
        notifications: z.object({
          email: z.string().email().or(emptyStringToUndefined),
          enable: z.boolean(),
        }),
        informations: z.object({
          name: z.string().min(2).max(50).or(emptyStringToUndefined),
          bio: z.string().max(500),
          phone: z.string().min(4).max(15).or(emptyStringToUndefined),
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
        <BoundedSectionWrapper>
          <FormSection
            title="Avatar"
            description="Upload your profile image from here. Dimension of the avatar should be 140 x 140px"
          >
            <Card>
              <CardContent>
                <FileUploaderField
                  control={form.control}
                  name="avatar"
                  className="mb-5"
                  multiple
                />
              </CardContent>
            </Card>
          </FormSection>
        </BoundedSectionWrapper>

        <BoundedSectionWrapper>
          <FormSection
            title="Email Notification"
            description="Set your email notification for messaging feature"
          >
            <Card>
              <CardContent>
                <FormFieldsWrapper>
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
                </FormFieldsWrapper>
              </CardContent>
            </Card>
          </FormSection>
        </BoundedSectionWrapper>

        <BoundedSectionWrapper>
          <FormSection
            title="Information"
            description="Add your profile information from here"
          >
            <Card>
              <CardContent>
                <FormFieldsWrapper>
                  <InputField
                    control={form.control}
                    name="informations.name"
                    label="Name"
                    placeholder="Enter your name"
                  />
                  <TextAreaField
                    control={form.control}
                    name="informations.bio"
                    label="Bio"
                    placeholder="Enter your bio"
                    TextAreaProps={{
                      rows: 3,
                      maxLength: 500,
                    }}
                  />
                  <PhoneInputField
                    control={form.control}
                    name="informations.phone"
                    label="Phone"
                    placeholder="Enter your phone number"
                    PhoneInputProps={{
                      defaultCountry: 'DZ',
                    }}
                  />
                </FormFieldsWrapper>
              </CardContent>
            </Card>
            <ProfileSubmitButton />
          </FormSection>
        </BoundedSectionWrapper>
      </form>
    </Form>
  );
};

export default memo(PasswordForm);
