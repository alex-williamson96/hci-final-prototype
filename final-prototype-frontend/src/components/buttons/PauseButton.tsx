import { Fab } from '@mui/material';
import useTimerStore from '../../stores/timer-store';

const PauseButton = () => {
  const { pauseTimer } = useTimerStore();

  return (
    <Fab
      color='primary'
      aria-label='pause'
      onClick={pauseTimer}>
      Pause
    </Fab>
  );
};

export default PauseButton;
