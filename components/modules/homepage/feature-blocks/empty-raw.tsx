import React from 'react';

export default function EmptyRaw() {
  return (
    <div className="border-grid border-b w-full h-56 dash">
      <div className="border-grid border-b">
        <div className="gap-4 border-grid border-x grid grid-cols-1 md:grid-cols-3 mx-auto px-4 w-full max-w-screen-lg h-4">
          <div className="border-grid border-x w-full"></div>
          <div className="md:flex border-grid border-x hidden w-full"></div>
          <div className="md:flex border-grid border-x hidden w-full"></div>
        </div>
      </div>
      <div className="gap-4 border-grid border-x grid grid-cols-1 md:grid-cols-3 mx-auto px-4 w-full max-w-screen-lg h-48">
        <div className="border-grid border-x w-full"></div>
        <div className="md:flex border-grid border-x hidden w-full"></div>
        <div className="md:flex border-grid border-x hidden w-full"></div>
      </div>
      <div className="border-grid border-t">
        <div className="gap-4 border-grid border-x grid grid-cols-1 md:grid-cols-3 mx-auto px-4 w-full max-w-screen-lg h-4">
          <div className="border-grid border-x w-full"></div>
          <div className="md:flex border-grid border-x hidden w-full"></div>
          <div className="md:flex border-grid border-x hidden w-full"></div>
        </div>
      </div>
    </div>
  );
}
