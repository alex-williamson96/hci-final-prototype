import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
interface CardWithIconProps {
  handleClick: () => void;
  cardText: string;
  backgroundColor: string;
  textSize?: string;
}

const CardWithIcon = ({
  cardText,
  handleClick,
  backgroundColor,
  textSize,
}: CardWithIconProps) => {
  const [cardTextSize, setCardTextSize] = useState('1.5rem');

  useEffect(() => {
    if (textSize !== undefined) {
      setCardTextSize(textSize);
    }
  }, [textSize]);

  return (
    <div
      className='flex items-center justify-between rounded p-3 cursor-pointer shadow-lg'
      style={{
        backgroundColor: backgroundColor,
        fontSize: cardTextSize,
        lineHeight: '2rem',
      }}
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
