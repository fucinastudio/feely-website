import React from 'react';
import Link from 'next/link';

import { Tag, Button } from '@fucina/ui';
import { cn } from '@fucina/utils';
import GridPattern from '@/components/grid-pattern';
import HeroImg from '@/components/hero-img';
import TrustedBy from '@/components/modules/homepage/trusted-by';

export default function Hero() {
  return (
    <section id="hero" className="relative z-20 w-screen">
      <div className="relative z-20 justify-items-center grid mx-auto px-6 sm:px-6 pt-32 sm:pt-48 pb-8 sm:pb-10 w-full max-w-screen-lg">
        <Tag variant="brand" className="rounded-full text-md">
          🔥 Now in waitlist
        </Tag>
        <div className="justify-items-center gap-4 sm:gap-6 grid mt-6 sm:mt-8 max-w-screen-md text-center">
          <h1 className="font-brand font-medium text-6xl sm:text-7xl">
            Fucina is the <span className="brand-gradient">new way</span> to
            build landing pages.
          </h1>
          <p className="max-w-screen-sm text-description text-lg">
            Beautifully designed, animated components and templates built with
            Tailwind CSS, React, and Framer Motion.
          </p>
        </div>
        <div className="mt-10">
          <Button asChild className="font-brand font-medium text-lg">
            <Link href="/signup">Start for free</Link>
          </Button>
        </div>
        <HeroImg />
      </div>
      <TrustedBy />
      <GridPattern
        width={32}
        height={32}
        x={-1}
        y={-1}
        strokeDasharray={'4 4'}
        className={cn(
          '[mask-image:radial-gradient(1024px_circle_at_center,white,transparent)]'
        )}
      />
    </section>
  );
}
