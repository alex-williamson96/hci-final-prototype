import { useParams } from 'wouter';
import workouts from '../components/modals/workouts.json';
import { useEffect, useState } from 'react';
import { Workout } from '../components/search/SearchList';
import WorkoutBuilderContainer from '../components/workout-builder/WorkoutBuidlerContainer';
import ExcerciseContainer from '../components/workout-builder/ExcerciseContainer';

const WorkoutOverviewPage = () => {
  const [workout, setWorkout] = useState<Workout>();
  const params = useParams();

  useEffect(() => {
    if (params.id !== null) {
      const w = workouts.find(
        (_workout) => _workout.id.toString() === params.id
      );

      console.log(w);
      console.log('params: ', params.id);
      setWorkout(w as Workout);
    }
  }, [params]);

  if (workout === undefined || workout === null) {
    return 'Error retreiving workout';
  }

  return (
    <>
      <div>{params.id !== null ? workout.name : 'Custom Workout'}</div>
      <WorkoutBuilderContainer>
        {workout.exerciseList.map((exercise) => {
          return (
            <ExcerciseContainer
              key={exercise.id}
              exercise={exercise}
            />
          );
        })}
      </WorkoutBuilderContainer>
    </>
  );
};

export default WorkoutOverviewPage;
