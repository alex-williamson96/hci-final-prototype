import { Link } from 'wouter';
import { Workout } from './SearchList';
import CardWrapper from '../card/CardWrapper';

interface SearchCardProps {
  workout: Workout;
}

const SearchCard = ({ workout }: SearchCardProps) => {
  return (
    <CardWrapper customSpacing='1'>
      <Link to={`workout/${workout.id}`}>
        <div className='flex justify-center text-xl bg-extend-colors-gray rounded p-2'>
          <span className='p-2'>{workout.name}</span>
        </div>
      </Link>
    </CardWrapper>
  );
};

export default SearchCard;
