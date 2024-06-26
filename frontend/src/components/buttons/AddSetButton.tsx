import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface AddSetButtonProps {
  handleAddSet: () => void;
}

const AddSetButton = ({ handleAddSet }: AddSetButtonProps) => {
  return (
    <div className='flex flex-row-reverse pr-4 pt-2'>
      <div
        className='flex items-center rounded cursor-pointer shadow-md w-36 text-xl'
        style={{
          backgroundColor: '#FFF4EF',
        }}
        onClick={handleAddSet}>
        <IconButton
          color='secondary'
          size='small'>
          <AddIcon fontSize='large' />
        </IconButton>
        <span className='text-center  rounded'>Set</span>
      </div>
    </div>
  );
};

export default AddSetButton;
