import { Img, Card, Li, Ul, Span, ButtonDel, Icon } from './PetItem.styled';
// import dogDefault from './dogDefault.png';
import sprite from '../../../assets/images/icons.svg';
import { useState } from 'react';
import ExitAccept from 'components/ExitAccept/ExitAccept';

const PetItem = ({ pet }) => {
  const [isModalDeleteAccept, setIsModalDeleteAccept] = useState(false);
  const editDateForm = event => {
    const reversDate = event.split('-').reverse();
    return reversDate.join('.');
  };

  return (
    <Card>
      <Img src={pet.photoURL} alt={`Your pet, ${pet.name}`} />
      <Ul>
        <Li>
          Name: <Span>{pet.name}</Span>
        </Li>
        <Li>
          Date of birth: <Span>{editDateForm(pet.birthday)}</Span>
        </Li>
        <Li>
          Breed: <Span>{pet.breed}</Span>
        </Li>
        <Li>
          Comments: <Span>{pet.comments}</Span>
        </Li>
        <ButtonDel onClick={() => setIsModalDeleteAccept(true)}>
          {isModalDeleteAccept && (
            <ExitAccept
              isModalDeleteAccept={isModalDeleteAccept}
              setIsModalDeleteAccept={setIsModalDeleteAccept}
              pet={pet}
            />
          )}
          <Icon>
            <use href={`${sprite}#delete`}></use>
          </Icon>
        </ButtonDel>
      </Ul>
    </Card>
  );
};

export default PetItem;
