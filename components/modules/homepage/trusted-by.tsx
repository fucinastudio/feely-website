import React from 'react';

export default function TrustedBy() {
  const brands = [
    'brand1.svg',
    'brand2.svg',
    'brand3.svg',
    'brand4.svg',
    'brand5.svg',
  ];
  return (
    <section
      id="trusted-by"
      className="relative z-20 bg-gradient-to-b from-white/0 to-fuchsia-600/[0.07] w-screen"
    >
      <div className="mx-auto px-5 sm:px-6 pt-20 pb-24 sm:pb-32 max-w-screen-lg text-center container">
        <p className="mx-auto max-w-screen-md text-description text-lg">
          You may not know them - they&apos;re just starting their skyrocket era
          - but we&apos;re actually making their job easier and more productive
        </p>
        <div className="mt-10">
          <ul className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white [&_path]:dark:fill-zinc-900">
            {brands.map((brand, index) => (
              <li key={index}>
                <img
                  alt={brand}
                  src={`/assets/company/${brand}`}
                  className="brightness-0 px-2 w-28 h-10 dark:invert"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
