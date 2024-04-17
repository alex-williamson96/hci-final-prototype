import { ReactNode } from 'react';

interface CardWrapperProps {
  children: ReactNode;
  customSpacing?: string;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  customSpacing,
}: CardWrapperProps) => {
  if (customSpacing === null || customSpacing === undefined) {
    customSpacing = '2';
  }
  return <div className={`p-${customSpacing}`}>{children}</div>;
};

export default CardWrapper;
