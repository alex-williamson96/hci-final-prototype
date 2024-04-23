import React from 'react';
import { ReactNode, useEffect, useState } from 'react';

interface ContainerProps {
  children: ReactNode;
  isExtended: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, isExtended }) => {
  const [className, setClassName] = useState('flex flex-col p-2 h-[10vh]');

  useEffect(() => {
    if (isExtended) {
      setClassName('flex flex-col p-2 h-[90vh]');
    }
  }, [isExtended]);

  return <div className={className}>{children}</div>;
};

export default Container;
