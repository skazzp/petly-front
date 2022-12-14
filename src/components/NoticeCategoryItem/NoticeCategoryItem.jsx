import icon from '../../assets/images/icons.svg';
import img from '../../assets/images/bg/Bg-girl-desc-1x.png';
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

const NoticeCategoryItem = () => {
  return (
    <Item>
      <Image src={img} alt="dog" />
      <Category>In good hands</Category>
      <BtnAddFavorite type="button">
        <svg width="24" height="22">
          <use href={icon + '#heart'}></use>
        </svg>
      </BtnAddFavorite>
      <Wrapper>
        <Title>Сute dog looking for a home</Title>
        <InfoList>
          <InfoItem>
            <InfoTitle>Breed:</InfoTitle>
            <Info>Pomeranian</Info>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Place:</InfoTitle>
            <Info>Lviv</Info>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Age:</InfoTitle>
            <Info>one year</Info>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Price:</InfoTitle>
            <Info>50$</Info>
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
