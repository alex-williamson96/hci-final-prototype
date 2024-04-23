import { navigate } from 'wouter/use-browser-location';
import CardWithIcon from '../components/card/CardWithIcon';
import CardWithModal from '../components/card/CardWithModal';
import CardWrapper from '../components/card/CardWrapper';
import workouts from '../assets/workouts.json';

const MainPage = () => {
  return (
    <>
      <CardWrapper>
        <CardWithModal
          isRedirect={true}
          isWithIcon={true}
          backgroundColor='#FFF4EF'
          cardText='Select a Workout'
          searchList={workouts}
          handleClick={() => null}
        />
      </CardWrapper>
      <CardWrapper>
        <CardWithIcon
          cardText='New Workout'
          backgroundColor='#FFF4EF'
          handleClick={() => navigate('/workout')}
        />
      </CardWrapper>
    </>
  );
};

export default MainPage;
