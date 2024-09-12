import React from "react";

interface WithButtonProps {
  title: string | JSX.Element;
  description: string;
  button: JSX.Element;
}

const WithButton: React.FC<WithButtonProps> = ({ title, description, button }) => {
  return (
    <div className="border-grid border-b w-full">
      <div className="md:gap-4 border-grid border-x grid grid-cols-1 md:grid-cols-3 mx-auto px-4 max-w-screen-lg size-full">
        <div className="gap-2 border-grid border-x grid col-span-2 p-6 size-full">
          <h2 className="font-brand font-medium text-4xl">{title}</h2>
          <p className="text-description text-lg">{description}</p>
        </div>
        <div className="flex justify-normal md:justify-center items-center border-grid border-x p-6 size-full">
          {button}
        </div>
      </div>
    </div>
  );
};

export default WithButton;
