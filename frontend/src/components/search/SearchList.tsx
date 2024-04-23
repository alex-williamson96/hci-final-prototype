import { SearchItem } from '../modals/SearchModal';
import SearchCard from './SearchCard';

interface SearchListProps {
  searchList: SearchItem[];
  handleClick?: (e: SearchItem) => void;
  isRedirect: boolean;
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

const SearchList = ({ searchList, handleClick, isRedirect }: SearchListProps) => {
  const Items = (searchList: SearchItem[]) => {
    return searchList.map((workout) => {
      return (
        <SearchCard
          key={workout.name}
          searchItem={workout}
          isRedirect={isRedirect}
          handleClick={handleClick}
        />
      );
    });
  };

  return (
    <div className='flex justify-center flex-col overflow-auto'>
      {Items(searchList)}
    </div>
  );
};

export default SearchList;
