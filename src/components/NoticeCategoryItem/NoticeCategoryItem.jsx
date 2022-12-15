import icon from '../../assets/images/icons.svg';
import defaultImage from '../../assets/images/default-pets.jpg';
import {
  BtnAddFavorite,
  BtnBox,
  BtnDlt,
  BtnLearnMore,
  Category,
  Image,
  Info,
  InfoItem,
  InfoList,
  InfoTitle,
  Item,
  Span,
  Title,
  Wrapper,
} from './NoticeCategoryItem.styled';

const NoticeCategoryItem = ({
  birthday,
  breed,
  category,
  comments,
  location,
  name,
  owner,
  photoURL,
  price,
  sex,
  title,
  _id,
}) => {
  return (
    <Item>
      <Image src={photoURL ? photoURL : defaultImage} alt={breed} />
      <Category>{category}</Category>
      <BtnAddFavorite type="button">
        <svg width="24" height="22">
          <use href={icon + '#heart'}></use>
        </svg>
      </BtnAddFavorite>
      <Wrapper>
        <Title>{title}</Title>
        <InfoList>
          <InfoItem>
            <InfoTitle>Breed:</InfoTitle>
            <Info>{breed} </Info>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Place:</InfoTitle>
            <Info>{location}</Info>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Age:</InfoTitle>
            <Info>{birthday}</Info>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Price:</InfoTitle>
            <Info>{price}</Info>
          </InfoItem>
        </InfoList>
      </Wrapper>
      <BtnBox>
        <BtnLearnMore type="button">Learn more</BtnLearnMore>
        <BtnDlt type="button">
          <Span>Delete</Span>
          <svg width="17" height="17">
            <use href={icon + '#delete-button'}></use>
          </svg>
        </BtnDlt>
      </BtnBox>
    </Item>
  );
};

export default NoticeCategoryItem;
