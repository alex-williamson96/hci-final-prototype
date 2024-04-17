import SearchCard from './SearchCard';

interface SearchListProps {
  workoutList: Workout[];
}

export interface Workout {
  id: number;
  name: string;
  isFavorite: boolean;
  exerciseList: Exercise[];
}

export interface Exercise {
  id: number;
  name: string;
  setList: WorkoutSet[];
}

export interface WorkoutSet {
  id: number;
  setNumber: number;
  weight: number;
  reps: number;
  target: number;
  rpe: number
}

const SearchList = ({ workoutList }: SearchListProps) => {
  const Items = (workoutList: Workout[]) => {
    return workoutList.map((workout) => {
      return (
        <SearchCard
          key={workout.name}
          workout={workout}
        />
      );
    });
  };

  return (
    <div className='flex justify-center flex-col overflow-auto'>{Items(workoutList)}</div>
  );
};

export default SearchList;
