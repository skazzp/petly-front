

import { useSelector } from 'react-redux';
import {selectUserPetsList} from './../../redux/pets/petsSelectors';
import PetItem from "./PetItem/PetItem";
import {Card} from './PetsList.styled'
const PetsList = () => {
    const userPetsList = useSelector(selectUserPetsList);
    console.log(userPetsList);



    return (
      
        <Card>
           {/* {userPetsList? 
           <> {userPetsList.map(pet=>{
            return( <PetItem pet={pet}/>)
           
           })}</>:<> */}
         <PetItem/>
         <PetItem/>
         <PetItem/>
         <PetItem/>
         {/* </>}  */}
        </Card>
    
    );
  };
  
  export default PetsList;
  