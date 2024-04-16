import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  handleInput: (input: string) => void;
}

const SearchBar = ({ handleInput }: SearchBarProps) => {
  const handleSearch = (input: string) => {
    handleInput(input);
  };
  return (
    <div>
      <TextField
        onChange={(e) => handleSearch(e.target.value)}
        id='search-input'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant='outlined'
        margin='normal'
        fullWidth
      />
    </div>
  );
};

export default SearchBar;
