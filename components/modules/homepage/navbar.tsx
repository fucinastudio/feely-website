import React from 'react';

import Logo from '@/components/logo';
import { LoginButton, SignupButton } from '@/components/auth-buttons';

export default function Navbar() {
  return (
    <nav
      id="navbar"
      className="top-0 left-0 z-50 fixed flex items-center bg-background border-b border-b-default w-screen h-14"
    >
      <div className="flex justify-between items-center mx-auto px-4 sm:px-6 w-full max-w-screen-xl">
        <Logo />
        <div className="flex items-center space-x-1.5">
          <LoginButton />
          <SignupButton location={{ section: 'Navbar' }} />
        </div>
      </div>
    </nav>
  );
}
