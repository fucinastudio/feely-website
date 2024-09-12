import React from 'react';
import Link from 'next/link';

import { Separator } from '@fucina/ui';
import { GithubIcon, LinkedinIcon, SlackIcon } from '@/components/social-icons';

export default function Footer() {
  return (
    <footer id="footer" className="relative z-20 bg-subtle w-screen">
      <div className="gap-6 grid mx-auto px-5 sm:px-6 py-8 max-w-screen-lg container">
        <div className="sm:flex justify-between items-center gap-6 grid">
          <Link href="/">
            <h3 className="font-brand font-medium text-2xl">
              Website Template
            </h3>
          </Link>
          <div className="flex justify-normal sm:justify-center items-center space-x-3">
            <Link
              href="https://github.com/feelyso/feely"
              className="opacity-85 hover:opacity-100 hover:cursor-pointer"
            >
              <GithubIcon />
            </Link>
            <Link
              href="/"
              className="opacity-85 hover:opacity-100 hover:cursor-pointer"
            >
              <SlackIcon />
            </Link>
            <Link
              href="/"
              className="opacity-85 hover:opacity-100 hover:cursor-pointer"
            >
              <LinkedinIcon />
            </Link>
          </div>
        </div>
        <Separator />
        <div className="sm:flex justify-between items-center gap-6 grid">
          <Link href="https://fucina.studio">
            <p className="text-description hover:text text-md">© 2024 Fucina</p>
          </Link>
          <div className="sm:flex justify-normal sm:justify-center gap-4 grid">
            <Link
              href="/"
              className="text-description text-md hover:text hover:cursor-pointer"
            >
              Terms of Service
            </Link>
            <Link
              href="/"
              className="text-description text-md hover:text hover:cursor-pointer"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
