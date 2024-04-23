import { ThemeProvider } from '@emotion/react';
import './App.css';
import TopInfoBar from './components/layout/TopInfoBar';
import { createTheme, ThemeOptions } from '@mui/material';
import Container from './components/layout/Container';
import Timer from './components/timer/Timer';
import TimerButtonsContainer from './components/buttons/TimerButtonsContainer';
import MainPage from './routes/MainPage';
import { Route, Switch } from 'wouter';
import WorkoutSummaryPage from './routes/WorkoutSummary';
import WorkoutOverviewPage from './routes/WorkoutOverviewPage';
import RPE from './routes/RPE';

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
        <Switch>
          <Route
            path='/'
            component={MainPage}
          />
          <Route
            path='/summary'
            component={WorkoutSummaryPage}
          />
          <Route
            path='/workout'
            component={WorkoutOverviewPage}
          />
          <Route
            path='/workout/:id'
            component={WorkoutOverviewPage}
          />
          <Route
            path='/rpe'
            component={RPE}
          />
          <Route>Error, please reload prototype.</Route>
        </Switch>
      </Container>
      <Container isExtended={false}>
        <TimerButtonsContainer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
