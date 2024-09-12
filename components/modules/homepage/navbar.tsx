import React from 'react';
import Link from 'next/link';

import { Button } from '@fucina/ui';
import Logo from '@/components/logo';

export default function Navbar() {
  return (
    <nav
      id="navbar"
      className="top-0 left-0 z-50 fixed flex items-center bg-background border-b border-b-default w-screen h-14"
    >
      <div className="flex justify-between items-center mx-auto px-4 sm:px-6 w-full max-w-screen-xl">
        <Logo url="/" title="Website Template" />
        <div className="flex items-center space-x-1.5">
          <Button
            variant="secondary"
            asChild
            className="font-brand font-medium text-lg"
          >
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="font-brand font-medium text-lg">
            <Link href="/signup">Start for free</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
