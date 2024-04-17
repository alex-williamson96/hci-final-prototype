import { WorkoutSet } from '../search/SearchList';

interface InputRowProps {
  set: WorkoutSet;
}

const InputRow = ({ set }: InputRowProps) => {
  return (
    <>
      {set.setNumber},
      {set.reps},
      {set.target},
      {set.weight},
      {set.rpe}
    </>
  );
};

export default InputRow;
