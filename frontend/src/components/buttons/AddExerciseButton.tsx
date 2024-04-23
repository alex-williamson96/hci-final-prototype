import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Exercise } from '../search/SearchList';

interface AddExerciseButtonProps {
  handleAddExercise: (exercise: Exercise) => void;
}

const AddExerciseButton = ({ handleAddExercise }: AddExerciseButtonProps) => {
  console.log(handleAddExercise);

  return (
    <div className='flex flex-row-reverse pr-4'>
      <div
        className='flex items-center rounded cursor-pointer shadow-md w-36 text-xl'
        style={{
          backgroundColor: '#F5F5F5',
        }}
        onClick={() => null}>
        <IconButton
          color='secondary'
          size='small'
          onClick={() => console.log('hi')}>
          <AddIcon fontSize='large' />
        </IconButton>
        <span className='text-center  rounded'>Exercise</span>
      </div>
    </div>
  );
};

export default AddExerciseButton;
