import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Exercise } from '../search/SearchList';
import exerciseList from '../../assets/exercises.json';
import { useState } from 'react';
import SearchModal, { SearchItem } from '../modals/SearchModal';

interface AddExerciseButtonProps {
  handleAddExercise: (e: SearchItem) => void;
}

const AddExerciseButton = ({ handleAddExercise }: AddExerciseButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className='flex flex-row-reverse pr-4'>
        <div
          className='flex items-center rounded cursor-pointer shadow-md w-36 text-xl'
          style={{
            backgroundColor: '#F5F5F5',
          }}
          onClick={handleModalOpen}>
          <IconButton
            color='secondary'
            size='small'>
            <AddIcon fontSize='large' />
          </IconButton>
          <span className='text-center  rounded'>Exercise</span>
        </div>
      </div>
      <SearchModal
        isRedirect={false}
        handleClick={handleAddExercise}
        searchList={exerciseList as Exercise[]}
        open={isModalOpen}
        handleClose={handleModalClose}
        label='modal-modal-title'
        description='modal-model-description'
      />
    </>
  );
};

export default AddExerciseButton;
