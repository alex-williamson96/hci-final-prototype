import { ThemeProvider } from '@emotion/react';
import './App.css';
import TopInfoBar from './components/TopInfoBar';
import { createTheme, ThemeOptions } from '@mui/material';
import Container from './components/Container';
import Timer from './components/timer/Timer';
import TimerButtonsContainer from './components/buttons/TimerButtonsContainer';

// eslint-disable-next-line react-refresh/only-export-components
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
      <Container isExtended={true}>
        <TopInfoBar />
        <Timer />
      </Container>
      <Container isExtended={false}>
        <TimerButtonsContainer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
