import { ChangeEvent, useState } from 'react';
import { WorkoutSet } from '../search/SearchList';

interface InputRowProps {
  set: WorkoutSet;
}

const InputRow = ({ set }: InputRowProps) => {
  const [rowSetInfo, setRowSetInfo] = useState(set);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRowSetInfo((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div
      className='w-full flex flex-row rounded shadow-sm pl-2 pr-2'
      style={{ backgroundColor: '#FFF4EF' }}>
      <style>
        {`
          input[type="number"]::-webkit-inner-spin-button,
          input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input[type="number"] {
            -moz-appearance: textfield;
          }
        `}
      </style>
      <span
        className='p-2 flex justify-center'
        style={{ flex: '1 1 10%' }}>
        {rowSetInfo.setNumber}
      </span>
      <span
        className='p-2 flex justify-center'
        style={{ flex: '1 1 22.5%' }}>
        {/* {set.reps} */}
        <input
          className='w-14 rounded p-1 text-center'
          value={rowSetInfo.weight}
          name='reps'
          inputMode='numeric'
          pattern='[0-9]*'
          type='number'
          onChange={(e) => handleChange(e)}
        />
      </span>
      <span
        className='p-2 flex justify-center'
        style={{ flex: '1 1 22.5%' }}>
        <input
          className='w-14 rounded p-1 text-center'
          value={rowSetInfo.reps}
          name='target'
          inputMode='numeric'
          pattern='[0-9]*'
          type='number'
          onChange={(e) => handleChange(e)}
        />
      </span>
      <span
        className='p-2 flex justify-center'
        style={{ flex: '1 1 22.5%' }}>
        <input
          className='w-14 rounded p-1 text-center'
          value={rowSetInfo.target}
          name='weight'
          inputMode='numeric'
          pattern='[0-9]*'
          type='number'
          onChange={(e) => handleChange(e)}
        />
      </span>
      <span
        className='p-2 flex justify-center'
        style={{ flex: '1 1 22.5%' }}>
        <input
          className='w-14 rounded p-1 text-center'
          value={rowSetInfo.rpe}
          name='rpe'
          inputMode='numeric'
          pattern='[0-9]*'
          type='number'
          onChange={(e) => handleChange(e)}
        />
      </span>
    </div>
  );
};

export default InputRow;
