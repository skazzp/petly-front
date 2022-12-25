import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import PetItemDef from './PetItem/PetItemDef';
import PetItem from './PetItem/PetItem';
import { Card } from './PetsList.styled';
import { getUserPet } from 'redux/pets/petsOperations';
import { selectUserPetsList, selectIsLoading } from 'redux/pets/petsSelectors';
import { LoaderSpiner } from '../LoaderSpiner/LoaderSpiner';
const PetsList = () => {
  const dispatch = useDispatch();
  const userPetsList = useSelector(selectUserPetsList);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getUserPet());
  }, [dispatch]);

  return (
    <Card>
      {isLoading && <LoaderSpiner />}
      {!isLoading && userPetsList.length>0 && (
        <>
          {userPetsList.map(pet => {
            return <PetItem pet={pet} key={pet._id} />;
          })}
        </>
      )}

      {!isLoading && userPetsList.length===0 && <PetItemDef />}
    </Card>
  );
};

export default PetsList;
