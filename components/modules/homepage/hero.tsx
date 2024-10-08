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
          🔥 Now in Public Beta
        </Tag>
        <div className="justify-items-center gap-4 sm:gap-6 grid mt-6 sm:mt-8 max-w-screen-md text-center">
          <h1 className="font-brand font-medium text-6xl sm:text-7xl">
            <span className="brand-gradient">User feedbacks</span> get real by
            being rewarded
          </h1>
          <p className="max-w-screen-sm text-description text-lg">
            Feely is a spot where user thoughts become a treasure.
            <br></br>
            More than giving users a voice: it&apos;s encouraging them to listen
            to each other, through conversations and rewarding.
            <br></br>
            The result? A product actually built for your people. And they will
            feel part of it.
          </p>
        </div>
        <div className="mt-10">
          <Button asChild className="font-brand font-medium text-lg">
            <Link href="https://www.app.feely.so/signup">Start for free</Link>
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
