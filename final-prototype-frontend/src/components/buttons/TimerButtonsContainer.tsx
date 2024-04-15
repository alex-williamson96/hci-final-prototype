import useTimerStore from '../../stores/timer-store';
import EndButton from './EndButton';
import PauseButton from './PauseButton';

const buttonReturn = (isPaused: boolean) => {
  if (isPaused) {
    return <EndButton />;
  }

  return <PauseButton />;
}

const TimerButtonsContainer = () => {
  const { isPaused } = useTimerStore();

  return (
    <div className='flex justify-center'>
      {buttonReturn(isPaused)}
    </div>
  )
};

export default TimerButtonsContainer;
