import { useEffect } from 'react';
import ClockDisplay from './ClockDisplay';
import useTimerStore from '../../stores/timer-store';

const Timer = () => {
  const { isPaused, time, inc } = useTimerStore();

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(inc, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isPaused, inc, time]);

  return (
    <div className='flex justify-center'>
      <ClockDisplay time={time} />
    </div>
  );
};

export default Timer;
