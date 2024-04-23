import { useParams } from 'wouter';
import { useEffect, useState } from 'react';
import { Exercise, Workout, WorkoutSet } from '../components/search/SearchList';
import WorkoutBuilderContainer from '../components/workout-builder/WorkoutBuidlerContainer';
import ExcerciseContainer from '../components/workout-builder/ExcerciseContainer';
import AddSetButton from '../components/buttons/AddSetButton';
import AddExerciseButton from '../components/buttons/AddExerciseButton';
import workouts from '../assets/workouts.json';

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

  console.log(params.id);

  const handleAddExercise = (exercise: Exercise) => {
    if (exercise === null || exercise === undefined) {
      return;
    }

    if (exercise.id === null) {
      exercise.id = Date.now();
    }

    let exerciseList = workout?.exerciseList;

    if (exerciseList === null || exerciseList === undefined) {
      exerciseList = [];
    }

    exerciseList.push(exercise);

    setWorkout((prev) => ({ ...prev, exerciseList: exerciseList }));
  };

  if (params.id === undefined) {
    return (
      <div className='p-4'>
        <AddExerciseButton handleAddExercise={(e) => handleAddExercise(e)} />
      </div>
    );
  }

  if (workout === undefined || workout === null) {
    return 'Error retreiving workout';
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
      <div>{params.id !== null ? workout.name : 'Custom Workout'}</div>
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
