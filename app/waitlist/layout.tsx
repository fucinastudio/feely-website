import React from "react";

import { cn } from "@fucina/utils";
import Logo from "@/components/logo";
import GridPattern from "@/components/grid-pattern";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-screen h-screen">
      <Logo
        url="/"
        title="Website Template"
        className="top-6 left-6 z-50 absolute"
      />
      {children}
      <GridPattern
        width={32}
        height={32}
        x={-1}
        y={-1}
        strokeDasharray={'4 4'}
        className={cn(
          '[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]'
        )}
      />
    </main>
  );
}
