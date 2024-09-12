import React from 'react';

export default function EmptyRaw() {
  return (
    <div className="border-grid border-b w-full h-48 dash">
      <div className="gap-4 border-grid border-x grid grid-cols-1 md:grid-cols-3 mx-auto px-4 max-w-screen-lg size-full">
        <div className="border-grid border-x size-full"></div>
        <div className="md:flex border-grid border-x hidden size-full"></div>
        <div className="md:flex border-grid border-x hidden size-full"></div>
      </div>
    </div>
  );
}
