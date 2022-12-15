import React, {useState} from "react";
import PetsList from "../PetsList/PetsList";
import {Board, Titles,Button, Add, Title, TitleAdd, Icon} from './PetsData.styled'
import sprite from '../../assets/images/icons.svg'
import ModalAddsPet from "components/ModalAddsPet/ModalAddsPet";
const PetsData = () => {

  const [openModal, setOpenModal] = useState(false);
  return (
    <Board>
      <Titles>
        <Title> My pets:</Title>
        <Add>
          <Title><TitleAdd>Add pet</TitleAdd></Title>
          <Button type="button" onClick={()=>setOpenModal(true)}> <Icon><use href={`${sprite}#plus-add-pet`} >
            </use></Icon></Button>
        </Add>
      

      </Titles>
      <PetsList/>
      <ModalAddsPet open={openModal} onClose={()=>setOpenModal(false)}/>
    </Board>
  );
};

export default PetsData;
