import icon from '../../assets/images/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addModalData, openLearnMoreModal } from 'redux/notice/noticeSlice';
import {
  selectIsLoading,
  selectToken,
  selectUser,
} from '../../redux/auth/authSelectors';
import { deleteFavorites } from '../../redux/notice/noticeOperations';
import { addFavorites } from 'redux/notice/noticeOperations';

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
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ExitAccept from 'components/ExitAccept/ExitAccept';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const NoticeCategoryItem = ({ notice, page }) => {
  const {
    birthday,
    breed,
    category,
    location,
    owner,
    photoURL,
    price,
    title,
    _id,
    img,
  } = notice;

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isLoading = useSelector(selectIsLoading);

  const user = useSelector(selectUser);

  const isOwner = user?._id === owner?._id || user?._id === owner;
  const favoriteNotice = useSelector(state => state.auth.user.favorites);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAcceptDeleteOwner, setIsAcceptDeleteOwner] = useState(false);

  // console.log(isOwner);

  useEffect(() => {
    checkFavorite(favoriteNotice, _id);
  }, [favoriteNotice, _id]);

  const checkFavorite = (favoriteNotice, _id) => {
    if (!favoriteNotice) {
      return;
    }
    const filterednotice = favoriteNotice.find(notice => notice === _id);
    if (filterednotice) {
      setIsFavorite(true);
    }
  };

  const birthdayFunc = () => {
    if (!birthday) return '-';

    const birthDay = new Date(birthday).getFullYear();
    const date = new Date().getFullYear();
    const bD = date - birthDay;

    if (bD > 1) return bD + ' years';
    if (bD === 1) return bD + ' year';
    if (bD === 0) {
      const birthDay = new Date(birthday).getMonth();
      const date = new Date().getMonth();
      const bD = date - birthDay;
      if (bD === 1) return bD + ' month';

      return bD + ' months';
    }
  };

  const handleClickFavorite = _id => {
    if (!token) {
      toast.warn('You must be logged in!');
      return;
    }
    if (isFavorite) {
      dispatch(deleteFavorites(_id));

      return setIsFavorite(false);
    }
    dispatch(addFavorites(_id));
    return setIsFavorite(true);
  };

  const openModal = e => {
    dispatch(addModalData(notice));
    dispatch(openLearnMoreModal());
  };

  const setCategory = category => {
    switch (category) {
      case 'sell':
        return 'Sell';
      case 'for-free':
        return 'In good hands';
      case 'lost-found':
        return 'Lost/found';
      default:
        return 'No category';
    }
  };

  const data = img.map(element => {
    return { original: element.photoURL, thumbnail: element.photoURL };
  });
  // console.log('data', data);
  return (
    <>
      <Item>
        {!photoURL ? (
          <ReactImageGallery
            items={data}
            // defaultImage={defaultImage}
            showBullets={false}
            showIndex={true}
            showThumbnails={false}
            lazyLoad={true}
            showPlayButton={false}
            showFullscreenButton={false}
          />
        ) : (
          <Image src={photoURL} alt={breed} />
        )}
        <Category>{setCategory(category)}</Category>

        <BtnAddFavorite
          type="button"
          onClick={() => handleClickFavorite(_id)}
          disabled={isLoading}
        >
          {isFavorite ? (
            <svg width="24" height="22">
              <use href={icon + '#heart-unlike'}></use>
            </svg>
          ) : (
            <svg width="24" height="22">
              <use href={icon + '#heart'}></use>
            </svg>
          )}
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
              <Info>{birthdayFunc()}</Info>
            </InfoItem>
            <InfoItem>
              {price && category === 'sell' ? (
                <>
                  <InfoTitle>Price:</InfoTitle>
                  <Info>{price}$</Info>
                </>
              ) : null}
            </InfoItem>
          </InfoList>
        </Wrapper>
        <BtnBox>
          <BtnLearnMore type="button" onClick={openModal}>
            Learn more
          </BtnLearnMore>

          {isOwner && (
            <BtnDlt type="button" onClick={() => setIsAcceptDeleteOwner(true)}>
              <Span>Delete</Span>
              <Svg width="17" height="17">
                <use href={icon + '#delete-button'}></use>
              </Svg>
            </BtnDlt>
          )}
        </BtnBox>
        {isAcceptDeleteOwner && (
          <ExitAccept
            isAcceptDeleteOwner={isAcceptDeleteOwner}
            setIsAcceptDeleteOwner={setIsAcceptDeleteOwner}
            id={_id}
            page={page}
          />
        )}
      </Item>
    </>
  );
};

export default NoticeCategoryItem;
