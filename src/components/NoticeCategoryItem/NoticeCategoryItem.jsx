import icon from '../../assets/images/icons.svg';
import defaultImage from '../../assets/images/default-pets.jpg';
import { useDispatch } from 'react-redux';
import { addModalData, openLearnMoreModal } from 'redux/notice/noticeSlice';

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
  Svg,
  Title,
  Wrapper,
} from './NoticeCategoryItem.styled';
import { addFavorites } from 'redux/notice/noticeOperations';

const NoticeCategoryItem = ({ notice }) => {
  const {
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
    id,
  } = notice;

  const dispatch = useDispatch();

  const addToFav = id => {
    dispatch(addFavorites(id));
  };

  // const removeFav = id => {
  //   dispatch(deleteFavorites(id));
  // };

  const openModal = e => {
    dispatch(addModalData(notice));
    dispatch(openLearnMoreModal());
  };

  return (
    <>
      <Item>
        <Image src={photoURL ? photoURL : defaultImage} alt={breed} />
        <Category>{category}</Category>
        <BtnAddFavorite
          type="button"
          onClick={() => {
            addToFav(id);
          }}
        >
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
          <BtnLearnMore type="button" onClick={openModal}>
            Learn more
          </BtnLearnMore>
          <BtnDlt type="button">
            <Span>Delete</Span>
            <Svg width="17" height="17">
              <use href={icon + '#delete-button'}></use>
            </Svg>
          </BtnDlt>
        </BtnBox>
      </Item>
    </>
  );
};

export default NoticeCategoryItem;
