import { ThemeProvider } from '@emotion/react';
import './App.css';
import TopInfoBar from './components/TopInfoBar';
import { createTheme } from '@mui/material';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#ff5722',
    },
    secondary: {
      main: '#1976d2',
    },
    error: {
      main: '#d50000',
    },
  },
};

const theme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='p-4'>
        <TopInfoBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
