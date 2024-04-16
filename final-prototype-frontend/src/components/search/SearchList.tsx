import SearchCard from './SearchCard';

interface SearchListProps {
  workoutList: Workout[];
}

export interface Workout {
  name: string;
}

const SearchList = ({ workoutList }: SearchListProps) => {
  const Items = (workoutList: Workout[]) => {
    return workoutList.map((workout) => {
      return (
        <SearchCard
          key={workout.name}
          workout={workout}
        />
      );
    });
  };

  return (
    <div className='flex justify-center flex-col overflow-auto'>{Items(workoutList)}</div>
  );
};

export default SearchList;
