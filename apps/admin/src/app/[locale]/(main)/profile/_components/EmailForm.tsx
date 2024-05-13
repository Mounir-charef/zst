'use client';
import { memo, useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, InputField } from '@mono/ui';
import BoundedSectionWrapper from '../../../../../components/common/BoundedSectionWrapper';
import FormSection from '../../../../../components/ui/form/formSection/FormSection';
import { Card, CardContent } from '../../../../../components/ui/Card';
import ProfileSubmitButton from './ProfileSubmitButton';

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
      <BoundedSectionWrapper>
        <FormSection title="Email" description="Change your email from here">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Card>
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
            <ProfileSubmitButton />
          </form>
        </FormSection>
      </BoundedSectionWrapper>
    </Form>
  );
};

export default memo(EmailForm);
