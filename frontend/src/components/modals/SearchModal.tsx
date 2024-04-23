import { Box, Modal } from '@mui/material';
import SearchBar from '../search/SearchBar';
import SearchList from '../search/SearchList';
import { useState } from 'react';
interface WorkoutSearchModalProps {
  open: boolean;
  handleClose: () => void;
  label: string;
  description: string;
  searchList: SearchItem[];
  isRedirect: boolean;
  handleClick: (e: SearchItem) => void;
}

export interface SearchItem {
  id: number;
  name: string;
  isFavorite: boolean;
}

const style = {
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  position: 'absolute' as 'absolute',
  top: '60%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: '90%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  overflow: 'scroll',
  p: 4,
};
const SearchModal = ({
  open,
  handleClose,
  label,
  description,
  searchList,
  isRedirect,
  handleClick,
}: WorkoutSearchModalProps) => {
  const [searchString, setSearchString] = useState('');

  const handleInput = (input: string) => {
    setSearchString(input);
  };

  const handleRedirectClick = (e: SearchItem) => {
    handleClick(e);
    handleClose();
  };

  const filteredSearchList = searchList.filter((workout) =>
    workout.name.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby={label}
      aria-describedby={description}>
      <Box sx={style}>
        <SearchBar handleInput={handleInput} />
        <SearchList
          isRedirect={isRedirect}
          handleClick={handleRedirectClick}
          searchList={filteredSearchList}
        />
      </Box>
    </Modal>
  );
};

export default SearchModal;
