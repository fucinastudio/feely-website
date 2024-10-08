'use client';

import React from 'react';
import Link from 'next/link';
import { track } from '@vercel/analytics';

import { Button } from '@fucina/ui';

const LoginButton = () => {
  return (
    <Button
      variant="secondary"
      asChild
      className="font-brand font-medium text-lg"
      onClick={() => track('Login')}
    >
      <Link href="https://www.app.feely.so/login">Login</Link>
    </Button>
  );
};

interface SignupButtonProps {
  location: { 
    section: string
  };
}

const SignupButton = ({ location }: SignupButtonProps) => {
  return (
    <Button
      asChild
      className="font-brand font-medium text-lg"
      onClick={() => track('Signup', { location: location.section })}
    >
      <Link href="https://www.app.feely.so/signup">Start for free</Link>
    </Button>
  );
};

export { LoginButton, SignupButton };
