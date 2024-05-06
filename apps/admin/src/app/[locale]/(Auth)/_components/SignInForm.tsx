'use client';

import { Button, CardContent, CardFooter, Input, Label } from '@mono/ui';
import { memo } from 'react';
import { Link } from '../../../../navigation';

const LoginForm = () => {
  return (
    <div className="grid gap-8">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          <Link
            href="/forgot-password"
            className="ml-auto inline-block text-sm underline"
          >
            Forgot your password?
          </Link>
        </div>
        <Input id="password" type="password" required />
      </div>
      <Button type="submit" className="w-full">
        Login
      </Button>
    </div>
  );
};

export default memo(LoginForm);
