import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const AddExerciseButton = () => {
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
          size='small'>
          <AddIcon fontSize='large' />
        </IconButton>
        <span className='text-center  rounded'>Exercise</span>
      </div>
    </div>
  );
};

export default AddExerciseButton;
