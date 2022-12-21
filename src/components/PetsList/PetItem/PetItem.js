import {Img, Card, Li, Ul, ButtonDel, Icon} from './PetItem.styled'
// import dogDefault from './dogDefault.png';
import sprite from '../../../assets/images/icons.svg'
import { deleteUserPet } from 'redux/pets/petsOperations';
import { useDispatch} from 'react-redux';

const PetItem = ({pet}) => {

  const dispatch = useDispatch();
  
 const editDateForm=(event)=>{
const reversDate =event.split('-').reverse()
  return (reversDate.join("."))
 }

    return (
      
      <Card >
        <Img src={pet.photoURL} alt={`Your pet, ${pet.name}`}/>
        <Ul>
          <Li>Name: <span>{pet.name}</span></Li>
          <Li>Date of birth: <span>{editDateForm(pet.birthday)}</span></Li>
          <Li>Breed: <span>{pet.breed}</span></Li>
          <Li>Comments: <span>{pet.comments}</span></Li>
          <ButtonDel onClick={()=> dispatch(deleteUserPet(pet._id))}>
          <Icon><use href={`${sprite}#delete`} >
            </use></Icon>
        </ButtonDel>
        </Ul>
       
      </Card>
     
    );
  };
  
  export default PetItem;
  