import React from "react";
import Link from "next/link";

import { Button } from "@fucina/ui";
import { cn } from "@fucina/utils";
import GridPattern from "@/components/grid-pattern";

export default function Banner() {
  return (
    <section
      id="banner"
      className="relative z-20 border-default border-b w-screen"
    >
      <div className="relative z-20 mx-auto px-10 py-20 max-w-screen-lg text-center container">
        <div className="gap-5 sm:gap-6 grid">
          <h1 className="font-brand font-medium text-4xl sm:text-5xl">
            <span className="brand-gradient">User feedbacks</span> get real by
            being rewarded
          </h1>
          <p className="text-description text-lg">
            Build a product for your people. And they will feel part of it.
          </p>
        </div>
        <div className="mt-8 sm:mt-10">
          <Button asChild className="font-brand font-medium text-lg">
            <Link href="/signup">Start for free</Link>
          </Button>
        </div>
      </div>
      <GridPattern
        width={32}
        height={32}
        x={-1}
        y={-1}
        strokeDasharray={'4 4'}
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]'
        )}
      />
    </section>
  );
}
