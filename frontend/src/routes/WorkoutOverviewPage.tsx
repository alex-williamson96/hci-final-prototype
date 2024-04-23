import { useParams } from 'wouter';
import { useEffect, useState } from 'react';
import { Exercise, Workout, WorkoutSet } from '../components/search/SearchList';
import WorkoutBuilderContainer from '../components/workout-builder/WorkoutBuidlerContainer';
import ExcerciseContainer from '../components/workout-builder/ExcerciseContainer';
import AddSetButton from '../components/buttons/AddSetButton';
import AddExerciseButton from '../components/buttons/AddExerciseButton';
import workouts from '../assets/workouts.json';
import { SearchItem } from '../components/modals/SearchModal';

const WorkoutOverviewPage = () => {
  const [workout, setWorkout] = useState<Workout>({
    name: '',
    id: Date.now(),
    isFavorite: false,
    exerciseList: [],
  });
  const params = useParams();

  useEffect(() => {
    if (params.id !== null) {
      const w = workouts.find(
        (_workout) => _workout.id.toString() === params.id
      );

      setWorkout(w as Workout);
    }
  }, [params]);

  if (workout === undefined) {
    setWorkout({
      name: 'Custom Workout',
      id: Date.now(),
      isFavorite: false,
      exerciseList: [],
    });
  }

  const handleAddExercise = (_exercise: SearchItem) => {
    const exercise = { ..._exercise };

    if (exercise === null || exercise === undefined) {
      return;
    }
    let exerciseList = workout?.exerciseList;

    if (exerciseList === null || exerciseList === undefined) {
      exerciseList = [];
    }

    exercise.id = Date.now() + exerciseList.length;

    exerciseList.push(exercise as Exercise);

    setWorkout((prev) => ({ ...prev, exerciseList: exerciseList }));
  };

  console.log(workout);

  if (workout === undefined || workout === null) {
    return <div>'Error retreiving workout'</div>;
  }

  if (workout.exerciseList.length === 0) {
    return (
      <div className='p-4'>
        <AddExerciseButton handleAddExercise={handleAddExercise} />
      </div>
    );
  }

  const handleAddSet = (exerciseId: number) => {
    if (!workout) return; // Guard clause in case workout is not defined

    const setLength = workout.exerciseList.find((e) => e.id === exerciseId)
      ?.setList.length;

    const newSet: WorkoutSet = {
      id: Date.now(), // Generates a unique ID based on the current timestamp
      setNumber:
        setLength === null || setLength === undefined ? 1 : setLength + 1,
      weight: 0, // Initialize default values or make these parameters of the function
      reps: 0,
      target: 0,
      rpe: 0,
    };

    const updatedWorkout = {
      ...workout,
      exerciseList: workout.exerciseList.map((exercise) => {
        if (exercise.id === exerciseId) {
          return {
            ...exercise,
            setList: [...exercise.setList, newSet],
          };
        }
        return exercise;
      }),
    };

    setWorkout(updatedWorkout);
  };

  return (
    <>
      <div className='flex content-center justify-center p-2 text-2xl'>
        <span className=' border rounded w-max p-1'>
          {params.id !== null ? workout.name : 'Custom Workout'}
        </span>
      </div>
      <WorkoutBuilderContainer>
        {workout.exerciseList.map((exercise) => {
          return (
            <div
              key={exercise.id}
              className='pb-3'>
              <ExcerciseContainer exercise={exercise} />
              <AddSetButton handleAddSet={() => handleAddSet(exercise.id)} />
            </div>
          );
        })}
        <AddExerciseButton handleAddExercise={handleAddExercise} />
      </WorkoutBuilderContainer>
    </>
  );
};

export default WorkoutOverviewPage;
