import { Link } from 'wouter';
import CardWrapper from '../card/CardWrapper';
import { SearchItem } from '../modals/SearchModal';

interface SearchCardProps {
  searchItem: SearchItem;
  isRedirect: boolean;
  handleClick?: () => void;
}

const SearchCard = ({
  searchItem,
  isRedirect,
  handleClick,
}: SearchCardProps) => {
  if (isRedirect) {
    return (
      <CardWrapper customSpacing='1'>
        <div
          className='flex justify-center text-xl bg-extend-colors-gray rounded p-2 shadow-md cursor-pointer'
          onClick={handleClick}>
          <span className='p-2'>{searchItem.name}</span>
        </div>
      </CardWrapper>
    );
  }

  return (
    <CardWrapper customSpacing='1'>
      <Link to={`workout/${searchItem.id}`}>
        <div className='flex justify-center text-xl bg-extend-colors-gray rounded p-2 shadow-md'>
          <span className='p-2'>{searchItem.name}</span>
        </div>
      </Link>
    </CardWrapper>
  );
};

export default SearchCard;
