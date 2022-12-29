import defaultCats from '../../../assets/images/pets.png';
import { DefaultImg, DefCard, Title } from './PetItem.styled';

const PetItem = () => {
  return (
    <DefCard>
      <DefaultImg src={defaultCats} alt="Default pets" />
      <Title>Please add your pet</Title>
    </DefCard>
  );
};

export default PetItem;
