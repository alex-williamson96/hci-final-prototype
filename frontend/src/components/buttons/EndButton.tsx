import { Fab } from '@mui/material';
import useTimerStore from '../../stores/timer-store';

const EndButton = () => {
  const { startTimer, time } = useTimerStore();
  return (
    <span>
      <Fab
        color='primary'
        aria-label='resume'
        variant='extended'
        onClick={startTimer}>
        {time === 0 ? 'Start' : 'Resume'}
      </Fab>
      <span className='p-1'></span>
      <Fab
        color='primary'
        variant='extended'
        aria-label='end'>
        {time === 0 ? 'Cancel' : 'End'}
      </Fab>
    </span>
  );
};

export default EndButton;
