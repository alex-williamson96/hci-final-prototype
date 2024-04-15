import { ThemeProvider } from '@emotion/react';
import './App.css';
import TopInfoBar from './components/layout/TopInfoBar';
import { createTheme, ThemeOptions } from '@mui/material';
import Container from './components/layout/Container';
import Timer from './components/timer/Timer';
import TimerButtonsContainer from './components/buttons/TimerButtonsContainer';
import Card from './components/card/Card';

// eslint-disable-next-line react-refresh/only-export-components
export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#FC5200',
    },
    secondary: {
      main: '#000000',
    },
    error: {
      main: '#d50000',
    },
    text: {
      primary: '#000000',
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
        <Card cardText='Select a Workout' isNewWorkout={false}/>
        <Card cardText='New Workout' isNewWorkout={true}/>
      </Container>
      <Container isExtended={false}>
        <TimerButtonsContainer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
