import Card from '../components/card/Card';
import CardWrapper from '../components/card/CardWrapper';

const MainPage = () => {
  return (
    <>
      <CardWrapper>
        <Card
          cardText='Select a Workout'
          isNewWorkout={false}
        />
      </CardWrapper>
      <CardWrapper>
        <Card
          cardText='New Workout'
          isNewWorkout={true}
        />
      </CardWrapper>
    </>
  );
};

export default MainPage;
