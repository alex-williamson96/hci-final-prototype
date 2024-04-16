import Card from '../components/card/Card';

const MainPage = () => {
  return (
    <>
      <Card
        cardText='Select a Workout'
        isNewWorkout={false}
      />
      <Card
        cardText='New Workout'
        isNewWorkout={true}
      />
    </>
  );
};

export default MainPage;
