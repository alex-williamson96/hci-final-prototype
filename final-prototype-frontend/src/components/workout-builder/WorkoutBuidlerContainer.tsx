import { ReactNode } from 'react';

interface WorkoutBuilderContainerProps {
  children: ReactNode;
}

const WorkoutBuilderContainer: React.FC<WorkoutBuilderContainerProps> = ({
  children,
}) => {
  return <div className='overflow-y-auto border-gray border'>{children}</div>;
};

export default WorkoutBuilderContainer;
