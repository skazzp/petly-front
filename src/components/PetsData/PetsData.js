import PetsList from "../PetsList/PetsList";
import {Board, Titles,Button, Add, Title, TitleAdd} from './PetsData.styled'

const PetsData = () => {
  return (
    <Board>
      <Titles>
        <Title> My pets:</Title>
        <Add>
          <Title><TitleAdd>Add pet</TitleAdd></Title>
          <Button type="button">+</Button>
        </Add>
      

      </Titles>
      <PetsList/>
    </Board>
  );
};

export default PetsData;
