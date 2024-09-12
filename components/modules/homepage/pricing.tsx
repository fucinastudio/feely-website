import React from 'react';
import Link from 'next/link';
import { CircleCheckBig, CircleX } from 'lucide-react';

import { Button } from '@fucina/ui';

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative z-20 border-grid bg-gradient-to-b from-white/0 to-fuchsia-600/[0.07] border-b w-screen"
    >
      <div className="items-center gap-y-16 lg:gap-6 grid grid-cols-1 lg:grid-cols-5 mx-auto px-8 py-32 sm:py-40 w-full max-w-screen-lg">
        <div className="col-span-2 p-4 md:p-10">
          <h3 className="font-brand font-medium text-3xl">Free, forever</h3>
          <p className="mt-1 text-description text-md">For small teams</p>
          <ul className="flex flex-col gap-2 mt-4 divide-y divide-zinc-200 dark:divide-zinc-800">
            <li className="flex items-center space-x-2 px-1 pt-2 font-medium">
              <CircleCheckBig
                size={16}
                strokeWidth={2.5}
                className="text-brand"
              />
              <span>Feature 1</span>
            </li>
            <li className="flex items-center space-x-2 px-1 pt-2 font-medium">
              <CircleCheckBig
                size={16}
                strokeWidth={2.5}
                className="text-brand"
              />
              <span>Feature 2</span>
            </li>
            <li className="flex items-center space-x-2 px-1 pt-2 font-medium">
              <CircleCheckBig
                size={16}
                strokeWidth={2.5}
                className="text-brand"
              />
              <span>Feature 3</span>
            </li>
            <li className="flex items-center space-x-2 px-1 pt-2 font-medium">
              <CircleX
                size={16}
                strokeWidth={2.5}
                className="text-description"
              />
              <span>Feature 4</span>
            </li>
            <li className="flex items-center space-x-2 px-1 pt-2 font-medium">
              <CircleX
                strokeWidth={2.5}
                size={16}
                className="text-description"
              />
              <span>Feature 5</span>
            </li>
          </ul>
          <Button
            variant="secondary"
            asChild
            className="mt-8 w-full font-brand font-medium text-lg"
          >
            <Link href="/">Start for free</Link>
          </Button>
        </div>
        <div className="border-default col-span-3 bg-subtle shadow-sm p-1 border rounded-lg">
          <div className="border-default bg-background p-10 border rounded h-full">
            <h3 className="font-brand font-medium text-3xl brand-gradient">
              Spice things up with Pro
            </h3>
            <p className="mt-1 text-description text-md">For growing teams</p>
            <p className="flex items-baseline gap-0.5 mt-4">
              <span className="font-semibold text-4xl">$15</span>
              <span className="text-description text-sm">/mo</span>
            </p>
            <ul className="flex flex-col gap-3 mt-6 divide-y divide-zinc-200 dark:divide-zinc-800">
              <li className="flex items-center space-x-2 px-2 pt-3 font-medium text-lg">
                <CircleCheckBig
                  size={20}
                  strokeWidth={2.5}
                  className="text-brand"
                />
                <span>Feature 1</span>
              </li>
              <li className="flex items-center space-x-2 px-2 pt-3 font-medium text-lg">
                <CircleCheckBig
                  size={20}
                  strokeWidth={2.5}
                  className="text-brand"
                />
                <span>Feature 2</span>
              </li>
              <li className="flex items-center space-x-2 px-2 pt-3 font-medium text-lg">
                <CircleCheckBig
                  size={20}
                  strokeWidth={2.5}
                  className="text-brand"
                />
                <span>Feature 3</span>
              </li>
              <li className="flex items-center space-x-2 px-2 pt-3 font-medium text-lg">
                <CircleCheckBig
                  size={20}
                  strokeWidth={2.5}
                  className="text-brand"
                />
                <span>Feature 4</span>
              </li>
              <li className="flex items-center space-x-2 px-2 pt-3 font-medium text-lg">
                <CircleCheckBig
                  size={20}
                  strokeWidth={2.5}
                  className="text-brand"
                />
                <span>Feature 5</span>
              </li>
            </ul>
            <Button asChild className="mt-10 w-full font-brand text-lg">
              <Link href="/">Get started</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
