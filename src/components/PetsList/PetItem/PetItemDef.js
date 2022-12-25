import {DefaultImg, DefCard, Title} from './PetItem.styled'

import defaultCats from '../../../assets/images/petss.png';


const PetItem = () => {
    return (
      <DefCard>
       <DefaultImg src={defaultCats} alt="Default pets"/>
       <Title>Please add your pet</Title>
      </DefCard>
     
    );
  };
  
  export default PetItem;
  