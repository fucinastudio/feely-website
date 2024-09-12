'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function HeroImg() {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case 'light':
      src = '/assets/hero-light.png';
      break;
    case 'dark':
      src = '/assets/hero-dark.png';
      break;
    default:
      src = '/assets/hero-light.png';
      break;
  }
  return (
      <div className="relative flex border-default bg-subtle shadow-sm mt-16 sm:mt-24 p-1 border rounded-lg">
        <Image
          src={src}
          alt="Picture of the product"
          height={720}
          width={1400}
          className="object-left-top border-default mx-auto border rounded h-full object-cover"
          draggable={false}
        />
      </div>
  );
}