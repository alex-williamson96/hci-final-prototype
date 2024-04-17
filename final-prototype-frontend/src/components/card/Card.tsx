import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'wouter';
import SearchModal from '../modals/SearchModal';

interface CardProps {
  cardText: string;
  isNewWorkout: boolean;
}

const Card = ({ cardText, isNewWorkout }: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    if (isNewWorkout) {
      if (location !== '/') {
        return;
      }

      setLocation('/build');
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <>
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
      <SearchModal
        open={isModalOpen}
        handleClose={handleModalClose}
        label='modal-modal-title'
        description='modal-model-description'
      />
    </>
  );
};

export default Card;
