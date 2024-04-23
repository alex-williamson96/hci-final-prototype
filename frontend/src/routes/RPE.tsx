import rpeImage from '../assets/rpe_image.png';

const RPE = () => {
  return (
    <div className='p-3 flex justify-center flex-col overflow-y-scroll'>
      <strong className='flex justify-center'>
        Rating of Perceived Exertion
      </strong>
      <p className='p-2 text-pretty flex justify-center'>
        <i>
          RPE stands for Rate of Perceived Exertion, and it's a way to measure
          how hard a person's body feels during physical activity. The RPE scale
          is based on physical sensations like: increased heart rate, increased
          respiration or breathing rate, Increased sweating, and muscle fatigue.
        </i>
      </p>
      <img
        className='pl-4 pr-4 flex justify-center'
        src={rpeImage}></img>
    </div>
  );
};

export default RPE;
