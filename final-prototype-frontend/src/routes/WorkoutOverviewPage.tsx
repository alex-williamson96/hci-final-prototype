import { useParams } from 'wouter';
import workouts from '../../../data/workouts.json';
import { useEffect, useState } from 'react';
import { Workout } from '../components/search/SearchList';
import WorkoutBuilderContainer from '../components/workout-builder/WorkoutBuidlerContainer';
import ExcerciseContainer from '../components/workout-builder/ExcerciseContainer';
import AddSetButton from '../components/buttons/AddSetButton';
import AddExerciseButton from '../components/buttons/AddExerciseButton';

const WorkoutOverviewPage = () => {
  const [workout, setWorkout] = useState<Workout>();
  const params = useParams();

  useEffect(() => {
    if (params.id !== null) {
      const w = workouts.find(
        (_workout) => _workout.id.toString() === params.id
      );

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
            <div className='pb-3'>
              <ExcerciseContainer
                key={exercise.id}
                exercise={exercise}
              />
              <AddSetButton />
            </div>
          );
        })}
        <AddExerciseButton />
      </WorkoutBuilderContainer>
    </>
  );
};

export default WorkoutOverviewPage;
