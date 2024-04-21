import Card from '../card/Card';
import CardWrapper from '../card/CardWrapper';
import { Exercise } from '../search/SearchList';
import InputRow from './InputRow';
import TopRow from './TopRow';

interface ExcerciseContainerProps {
  exercise: Exercise;
}

const ExcerciseContainer = ({ exercise }: ExcerciseContainerProps) => {
  return (
    <>
      <CardWrapper>
        <Card
          backgroundColor='#F5F5F5'
          cardText={exercise.name}
          handleClick={() => null}
        />
      </CardWrapper>
      <TopRow />
      {exercise.setList.map((set) => {
        return (
          <div key={set.id} className='p-1.5'>
            <InputRow set={set} />
          </div>
        );
      })}
    </>
  );
};

export default ExcerciseContainer;
