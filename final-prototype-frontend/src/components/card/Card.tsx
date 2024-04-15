import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import WorkoutSearchModal from '../modals/WorkoutSearchModal';
import { useState } from 'react';

interface CardProps {
  cardText: string;
  isNewWorkout: boolean;
}

const Card = ({ cardText, isNewWorkout }: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    if (isNewWorkout) {
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <div className='p-2'>
      <div
        className='flex items-center justify-between bg-very-light-orange rounded text-2xl p-1 cursor-pointer'
        onClick={handleClick}>
        <IconButton
          color='secondary'
          size='large'>
          <AddIcon fontSize='large' />
        </IconButton>
        <span className='text-center flex-1 rounded pr-10'>{cardText}</span>
      </div>
      <WorkoutSearchModal
        open={isModalOpen}
        handleClose={handleModalClose}
        label='modal-modal-title'
        description='modal-model-description'
      />
    </div>
  );
};

export default Card;
