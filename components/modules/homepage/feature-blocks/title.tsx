import React from "react";

interface TitleProps {
  title: string | JSX.Element;
  description: string;
}

const Title: React.FC<TitleProps> = ({ title, description }) => {
  return (
    <div className="border-grid border-b w-full">
      <div className="gap-4 border-grid border-x grid grid-cols-1 md:grid-cols-3 mx-auto px-4 max-w-screen-lg size-full">
        <div className="gap-2 border-grid border-x grid col-span-2 p-6 size-full">
          <h2 className="font-brand font-medium text-4xl">{title}</h2>
          <p className="text-description text-lg">{description}</p>
        </div>
        <div className="md:flex border-grid border-x hidden size-full"></div>
      </div>
    </div>
  );
};

export default Title;
