import { useState } from 'react';
import { useLocation } from 'wouter';
import SearchModal from '../modals/SearchModal';
import CardWithIcon from './CardWithIcon';
import Card from './Card';

interface CardProps {
  cardText: string;
  backgroundColor: string;
  isWithIcon: boolean;
}

const CardWithModal = ({
  cardText,
  backgroundColor,
  isWithIcon,
}: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const returnProperCard = () => {
    if (isWithIcon) {
      return (
        <CardWithIcon
          handleClick={() => setIsModalOpen(true)}
          cardText={cardText}
          backgroundColor={backgroundColor}
        />
      );
    }
    return (
      <Card
        handleClick={() => setIsModalOpen(true)}
        cardText={cardText}
        backgroundColor={backgroundColor}
      />
    );
  };

  return (
    <>
      {returnProperCard()}
      <SearchModal
        open={isModalOpen}
        handleClose={handleModalClose}
        label='modal-modal-title'
        description='modal-model-description'
      />
    </>
  );
};

export default CardWithModal;
