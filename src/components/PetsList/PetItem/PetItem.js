import {Img, Card, Li, Ul,Span, ButtonDel, Icon} from './PetItem.styled'
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
          <Li>Name: <Span>{pet.name}</Span></Li>
          <Li>Date of birth: <Span>{editDateForm(pet.birthday)}</Span></Li>
          <Li>Breed: <Span>{pet.breed}</Span></Li>
          <Li>Comments: <Span>{pet.comments}</Span></Li>
          <ButtonDel onClick={()=> window.confirm('Are you sure?') && dispatch(deleteUserPet(pet._id))}>
          <Icon><use href={`${sprite}#delete`} >
            </use></Icon>
        </ButtonDel>
        </Ul>
       
      </Card>
     
    );
  };
  
  export default PetItem;
  