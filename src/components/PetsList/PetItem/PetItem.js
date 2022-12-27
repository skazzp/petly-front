import { Card, Li, Ul, Span, ButtonDel, Icon } from './PetItem.styled';
// import dogDefault from './dogDefault.png';
import sprite from '../../../assets/images/icons.svg';
import { deleteUserPet } from 'redux/pets/petsOperations';
import { useDispatch } from 'react-redux';

import { Carousel } from 'react-carousel-minimal';

const PetItem = ({ pet }) => {
  const dispatch = useDispatch();

  const editDateForm = event => {
    const reversDate = event.split('-').reverse();
    return reversDate.join('.');
  };
  // const petsFoto =
  console.log(pet.photoURL);
  const data = [
    {
      image:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg?crop=0.444xw:1.00xh;0.129xw,0&resize=980:*',
      // pet.photoURL,
    },
    {
      image:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*',
      // pet.photoURL,
    },
    // {
    //   image: pet.photoURL,
    // },
  ];

  const slideNumberStyle = {
    fontSize: '10px',
    fontWeight: 'bold',
  };

  // const width = {
  //   width: '240px',
  //    @media (min-width: '768px')
  // };

  return (
    <Card>
      <Carousel
        data={data}
        time={10000}
        width="161px"
        height="161px"
        radius="10px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="40px"
        style={{
          width: '240px',
          height: '240px',
          // border: '${props => props.theme.radii.md}',
          // margin: auto,
          // margin: auto,
          // object: cover,
          // @media (min-width: 768px) {
          //   width: '161px',
          //   height: '161px',
          //   margin:0,
          //   margin-right: '32px',
          // }
        }}
      />
      {/* <Img src={pet.photoURL} alt={`Your pet, ${pet.name}`} />; */}
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
        <ButtonDel
          onClick={() =>
            window.confirm('Are you sure?') && dispatch(deleteUserPet(pet._id))
          }
        >
          <Icon>
            <use href={`${sprite}#delete`}></use>
          </Icon>
        </ButtonDel>
      </Ul>
    </Card>
  );
};

export default PetItem;
