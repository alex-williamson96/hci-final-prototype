import { Fab } from '@mui/material';
import useTimerStore from '../../stores/timer-store';

const EndButton = () => {
  const { startTimer } = useTimerStore();
  return (
    <span>
      <Fab
        color='primary'
        aria-label='resume'
        variant='extended'
        onClick={startTimer}>
        Resume
      </Fab>
      <span className='p-1'></span>
      <Fab
        color='primary'
        variant='extended'
        aria-label='end'>
        End
      </Fab>
    </span>
  );
};

export default EndButton;
