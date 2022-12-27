import icon from '../../assets/images/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addModalData, openLearnMoreModal } from 'redux/notice/noticeSlice';
import {
  selectIsLoading,
  selectToken,
  selectUser,
} from '../../redux/auth/authSelectors';
import {
  deleteFavorites,
  deleteNotices,
} from '../../redux/notice/noticeOperations';
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

import { Carousel } from 'react-carousel-minimal';

const NoticeCategoryItem = ({ notice }) => {
  const { birthday, breed, category, location, owner, img, price, title, _id } =
    notice;

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isLoading = useSelector(selectIsLoading);

  const user = useSelector(selectUser);

  const isOwner = user?._id === owner?._id || user?._id === owner;
  const favoriteNotice = useSelector(state => state.auth.user.favorites);
  const [isFavorite, setIsFavorite] = useState(false);

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

  // const listItems = img.map(element => {
  //   return element.photoURL;
  // });

  // const data = [
  //   {
  //     image:
  //       'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg?crop=0.444xw:1.00xh;0.129xw,0&resize=980:*',
  //     // pet.photoURL,
  //   },
  //   {
  //     image:
  //       'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*',
  //   },
  //   // {
  //   //   image: listItems,
  //   // },
  // ];
  // console.log(img);
  const slideNumberStyle = {
    fontSize: '10px',
    fontWeight: 'bold',
  };

  // const width = {
  //   width: '240px',
  //    @media (min-width: '768px')
  // };

  // function RenderingArrayOfObjects() {
  const data = img.map(element => {
    return { image: element.photoURL };
  });
  //   console.log(listItems);
  //   return <Image src={listItems} />;
  // }

  // return (
  //   <Card>

  return (
    <>
      <Item>
        <Carousel
          data={data}
          time={2000}
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
        {/* <RenderingArrayOfObjects /> */}
        {/* <Image src={photoURL} alt={breed} /> */}
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
            <BtnDlt
              type="button"
              onClick={() => {
                window.confirm('Are you sure?') && dispatch(deleteNotices(_id));
              }}
            >
              <Span>Delete</Span>
              <Svg width="17" height="17">
                <use href={icon + '#delete-button'}></use>
              </Svg>
            </BtnDlt>
          )}
        </BtnBox>
      </Item>
    </>
  );
};

export default NoticeCategoryItem;
