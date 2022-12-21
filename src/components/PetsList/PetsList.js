
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import PetItemDef from "./PetItem/PetItemDef";
import PetItem from "./PetItem/PetItem";
import {Card} from './PetsList.styled'
import { getUserPet} from 'redux/pets/petsOperations';
import { selectUserPetsList } from 'redux/pets/petsSelectors';
import { refreshUser } from 'redux/auth/authOperation';

const PetsList = () => {
    const dispatch = useDispatch();
    const userPetsList = useSelector(selectUserPetsList);
    
    useEffect(() => {
        dispatch(getUserPet());
      }, [dispatch]);
      
    // console.log(userPetsList);



    return (
      
        <Card>
           {userPetsList.length? 
           <> {userPetsList.map(pet=>{
            return( <PetItem pet={pet} key={pet._id}/>)
           
           })}</>:<>
         <PetItemDef/>
       
         </>} 
        </Card>
    
    );
  };
  
  export default PetsList;
  