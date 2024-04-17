interface CardProps {
  cardText: string;
  handleClick: () => void;
  backgroundColor: string;
}

const Card = ({ cardText, handleClick, backgroundColor }: CardProps) => {
  return (
    <>
      <div
        className='flex items-center justify-between rounded text-2xl p-3 cursor-pointer shadow-sm'
        style={{ backgroundColor: backgroundColor }}
        onClick={handleClick}>
        <span className='text-center flex-1 rounded'>{cardText}</span>
      </div>
    </>
  );
};

export default Card;
