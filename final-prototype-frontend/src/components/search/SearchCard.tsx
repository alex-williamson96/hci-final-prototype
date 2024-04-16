import { Workout } from './SearchList';

interface SearchCardProps {
  workout: Workout;
}

const SearchCard = ({ workout }: SearchCardProps) => {
  return (
    <div className='p-1'>
      <div className='flex justify-center text-xl bg-gray rounded p-2'>
        <span className='p-2'>{workout.name}</span>
      </div>
    </div>
  );
};

export default SearchCard;
