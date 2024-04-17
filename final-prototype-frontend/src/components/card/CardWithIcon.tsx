import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
interface CardWithIconProps {
  handleClick: () => void;
  cardText: string;
  backgroundColor: string;
}

const CardWithIcon = ({ cardText, handleClick, backgroundColor }: CardWithIconProps) => {
  return (
    <div
        className={`flex items-center justify-between bg-${backgroundColor} rounded text-2xl p-3 cursor-pointer`}
        onClick={handleClick}>
      <IconButton
        color='secondary'
        size='large'>
        <AddIcon fontSize='large' />
      </IconButton>
      <span className='text-center flex-1 rounded pr-10'>{cardText}</span>
    </div>
  );
};

export default CardWithIcon;
