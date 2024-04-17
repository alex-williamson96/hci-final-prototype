import { useParams } from 'wouter';
import workouts from '../components/modals/workouts.json';
import { useEffect, useState } from 'react';
import { Workout } from '../components/search/SearchList';

const WorkoutOverviewPage = () => {
  const [workout, setWorkout] = useState({} as Workout);
  const params = useParams();

  useEffect(() => {
    if (params.id !== null) {
      const w = workouts.find(
        (_workout) => _workout.id.toString() === params.id
      );
      setWorkout(w as Workout);
    }
  }, [params]);

  return <div>{params.id !== null ? workout.name : 'Custom Workout'}</div>;
};

export default WorkoutOverviewPage;
