import React from "react";

interface CardProps {
  title: string;
  description: string;
  illustration: JSX.Element;
}

const SingleCard: React.FC<CardProps> = ({ title, description, illustration }) => {
  return (
    <div className="border-grid border-b w-full">
      <div className="gap-4 border-grid border-x grid mx-auto px-4 max-w-screen-lg size-full">
        <div className="block border-grid border-x p-4">
          <div className="border-default bg-subtle shadow-sm p-1 border rounded-lg h-80">
            <div className="flex flex-col border-default bg-background border rounded h-full overflow-hidden">
              <div className="h-full grow">{illustration}</div>
              <div className="gap-1 border-grid grid p-4 border-t w-full">
                <h3 className="font-brand font-medium text-xl">{title}</h3>
                <p className="text-description text-lg">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface DoubleCardProps {
  firstTitle: string;
  firstDescription: string;
  firstIllustration: JSX.Element;
  secondTitle: string;
  secondDescription: string;
  secondIllustration: JSX.Element;
}

const DoubleCard: React.FC<DoubleCardProps> = ({
  firstTitle,
  firstDescription,
  firstIllustration,
  secondTitle,
  secondDescription,
  secondIllustration,
}) => {
  return (
    <div className="border-grid border-b w-full">
      <div className="md:gap-4 border-grid border-x grid grid-cols-1 md:grid-cols-3 mx-auto px-4 max-w-screen-lg size-full">
        <div className="block border-grid border-x col-span-2 p-4 size-full">
          <div className="border-default bg-subtle shadow-sm p-1 border rounded-lg h-80">
            <div className="flex flex-col border-default bg-background border rounded h-full overflow-hidden">
              <div className="h-full grow">{firstIllustration}</div>
              <div className="gap-1 border-grid grid p-4 border-t w-full">
                <h3 className="font-brand font-medium text-xl">{firstTitle}</h3>
                <p className="text-description text-lg">{firstDescription}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="block border-grid border-x p-4 border-t md:border-t-0 size-full">
          <div className="border-default bg-subtle shadow-sm p-1 border rounded-lg h-80">
            <div className="flex flex-col border-default bg-background border rounded h-full overflow-hidden">
              <div className="h-full grow">{secondIllustration}</div>
              <div className="gap-1 border-grid grid p-4 border-t w-full">
                <h3 className="font-brand font-medium text-xl">
                  {secondTitle}
                </h3>
                <p className="text-description text-lg">{secondDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SingleCard, DoubleCard };
