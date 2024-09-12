import React from "react";

interface IconItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface IconsProps {
  items: IconItem[];
}

const Icons: React.FC<IconsProps> = ({ items }) => {
  return (
    <div className="border-grid border-b w-full">
      <div className="md:gap-4 border-grid border-x grid grid-cols-1 md:grid-cols-3 mx-auto px-4 max-w-screen-lg size-full">
        {items.map((item, index) => (
          <div key={index} className="block border-grid border-x p-5 size-full">
            <div className="size-6 [&>svg]:stroke-brand-500 [&>svg]:size-6">{item.icon}</div>
            <p className="pt-3 text-description text-lg">
              <span className="font-medium text">{item.title}</span>{' '}
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Icons;
