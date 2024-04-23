interface ClockDisplayProps {
  time: number;
}

function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
    remainingSeconds
  )}`;
}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

const ClockDisplay = ({ time }: ClockDisplayProps) => {
  return <span className="f text-5xl">{formatTime(time)}</span>;
};

export default ClockDisplay;
