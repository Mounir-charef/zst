'use client';
import { Button, Form, InputField } from '@mono/ui';
import { ArrowRightIcon, SearchIcon } from 'lucide-react';
import React, { use } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import Search from './Search';

const HeroSearch = () => {
  const searchSchema = z.object({
    search: z.string(),
  });
  type formType = z.infer<typeof searchSchema>;
  const form = useForm<formType>({
    defaultValues: {
      search: '',
    },
  });
  const onSubmit: SubmitHandler<formType> = (payload) => {
    console.log(payload);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Search control={form.control} name="search" />
      </form>
    </Form>
  );
};

export default HeroSearch;
