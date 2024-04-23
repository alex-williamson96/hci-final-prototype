import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Button } from '@mui/material';

const TopInfoBar = () => {
  return (
    <div className='flex justify-between items-center w-full px-2'>
      <div className='flex-1 flex justify-start'>
        <Button variant='text'>Close</Button>
      </div>
      <div className='text-center text-xl'>
        <span>Weight Training</span>
      </div>
      <div className='flex-1 flex justify-end'>
        <SettingsOutlinedIcon
          className='text-orange-500'
          fontSize='medium'
        />
      </div>
    </div>
  );
};

export default TopInfoBar;
