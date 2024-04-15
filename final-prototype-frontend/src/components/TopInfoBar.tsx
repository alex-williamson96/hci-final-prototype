import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Button } from '@mui/material';

const TopInfoBar = () => {
  return (
    <div className='flex justify-between items-center text-2xl'>
      <Button variant='text'>Close</Button>
      <span className='pb-1.5 pt-1.5 pl-2 pr-2'>Weight Training</span>
      <span className='pb-1.5 pt-1.5 pl-2 pr-2'>
        <SettingsOutlinedIcon
          className='text-orange-500'
          fontSize='medium'
        />
      </span>
    </div>
  );
};

export default TopInfoBar;
