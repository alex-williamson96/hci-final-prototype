import { create } from 'zustand';

interface TimerState {
  isPaused: boolean;
  pauseTimer: () => void;
  startTimer: () => void;
  time: number;
  inc: () => void;
}

const useTimerStore = create<TimerState>()((set) => ({
  isPaused: false,
  pauseTimer: () => set(() => ({
    isPaused: true
  })),
  startTimer: () => set(() => ({
    isPaused: false
  })),
  time: 0,
  inc: () =>
    set((state) => ({
      time: state.time + 1
    })),
}));

export default useTimerStore;
