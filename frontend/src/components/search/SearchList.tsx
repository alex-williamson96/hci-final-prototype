import { SearchItem } from '../modals/SearchModal';
import SearchCard from './SearchCard';

interface SearchListProps {
  workoutList: SearchItem[];
}

export interface Workout extends SearchItem {
  exerciseList: Exercise[];
}

export interface Exercise extends SearchItem {
  setList: WorkoutSet[];
}

export interface WorkoutSet {
  id: number;
  setNumber: number;
  weight: number;
  reps: number;
  target: number;
  rpe: number;
}

const SearchList = ({ workoutList }: SearchListProps) => {
  const Items = (workoutList: SearchItem[]) => {
    return workoutList.map((workout) => {
      return (
        <SearchCard
          key={workout.name}
          searchItem={workout}
          isRedirect={true}
          
        />
      );
    });
  };

  return (
    <div className='flex justify-center flex-col overflow-auto'>
      {Items(workoutList)}
    </div>
  );
};

export default SearchList;
