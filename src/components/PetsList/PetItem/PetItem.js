import {Img, Card, Li, Ul, ButtonDel, Icon} from './PetItem.styled'
import dogDefault from './dogDefault.png';



const PetItem = () => {
    return (
      
      <Card>
        <Img src={dogDefault} alt="Girl in a jacket"/>
        <Ul>
          <Li>Name: <span>Jack</span></Li>
          <Li>Date of birth: <span>22.04.2018</span></Li>
          <Li>Breed: <span>22.04.2018</span></Li>
          <Li>Comments: <span>Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </span></Li>
          <ButtonDel>
          <Icon><use href="" >
            </use></Icon>
        </ButtonDel>
        </Ul>
       
      </Card>
     
    );
  };
  
  export default PetItem;
  