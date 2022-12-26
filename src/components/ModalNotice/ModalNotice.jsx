import { useState } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addFavorites, deleteFavorites } from 'redux/notice/noticeOperations';
import { closeLearnMoreModal } from 'redux/notice/noticeSlice';
// import { openLearnMoreModal } from 'redux/notice/noticeSlice';
import modalClose from '../../assets/images/icons.svg';
import heart from '../../assets/images/icons.svg';
// import dog from '../../assets/images/mobile.png';
import {
  Btn,
  CloseBtn,
  ContactText,
  Div,
  FirstList,
  ImageWrapper,
  Img,
  ItemContact,
  Items,
  Link,
  ListButtons,
  ListWrapper,
  Overlay,
  P,
  SecondList,
  Span,
  Status,
  StatusText,
  Svg,
  SvgHeart,
  Text,
  TextBtn,
  TextSecond,
  Title,
  TxtWrapper,
  WrapperForDesc,
} from './ModalNotice.styled';

const ModalNotice = () => {
  const dispatch = useDispatch();

  const modalRoot = document.querySelector('#modal-root');
  const isModalOpen = useSelector(state => state.notice.isLearnMoreModalOpen);
  const data = useSelector(state => state.notice.modalData);
  const favoriteNotice = useSelector(state => state.auth.user.favorites);
  const isAuth = useSelector(state => state.auth.token);

  const [isFavorite, setIsFavorite] = useState(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleClose = e => {
      if (e.code === 'Escape') {
        dispatch(closeLearnMoreModal());
      }
    };
    window.addEventListener('keydown', handleClose);
    return () => {
      window.removeEventListener('keydown', handleClose);
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen, dispatch]);
  const backDropCloseModal = e => {
    if (e.target === e.currentTarget) {
      dispatch(closeLearnMoreModal());
    }
  };

  const findFavoriteNotice = noticeId => {
    if (!isAuth) return;
    const finedNotice = favoriteNotice.find(el => el === noticeId);
    return finedNotice;
  };
  useEffect(() => {
    setIsFavorite(findFavoriteNotice(data._id));
    // eslint-disable-next-line
  }, [favoriteNotice, data._id]);

  const corectData = str => {
    const data = new Date(str).getDate();
    const month = new Date(str).getMonth() + 1;
    const year = new Date(str).getFullYear();
    return (
      data.toString() +
      '.' +
      (month < 10 ? '0' + month.toString() : month.toString()) +
      '.' +
      year.toString()
    );
  };
  const handleClick = () => {
    if (!isAuth) {
      toast.error('You must be logged in!');
      return;
    }
  };
  const fixedStatus = str => {
    if (str === 'for-free') {
      console.log(str);
      const fixStr = str.replaceAll(str, 'in good hands');
      return fixStr[0].toUpperCase() + fixStr.slice(1);
      // return str[0].toUpperCase() + data.category.slice(1);
    }
    return str[0].toUpperCase() + str.slice(1);
  };
  return createPortal(
    <Overlay onClick={backDropCloseModal}>
      <Div>
        <WrapperForDesc>
          <ImageWrapper>
            <Status>
              <StatusText>{fixedStatus(data.category)}</StatusText>
            </Status>
            <Img src={data.photoURL} alt="Animal"></Img>
          </ImageWrapper>
          <div>
            <Title>{data.title}</Title>
            <ListWrapper>
              <FirstList>
                <Items>
                  <Text>Name:</Text>
                </Items>
                <Items>
                  <Text>Birthday:</Text>
                </Items>
                <Items>
                  <Text>Breed:</Text>
                </Items>
                <Items>
                  <Text>Location:</Text>
                </Items>
                <Items>
                  <Text>The sex:</Text>
                </Items>
                <Items>
                  <Text>Email:</Text>
                </Items>
                <Items>
                  <Text>Phone:</Text>
                </Items>
                {data.price ? (
                  <Items>
                    <Text>Sell:</Text>
                  </Items>
                ) : null}
              </FirstList>
              <SecondList>
                <Items>
                  <TextSecond>{data.name}</TextSecond>
                </Items>
                <Items>
                  <TextSecond>{corectData(data.birthday)}</TextSecond>
                </Items>
                <Items>
                  <TextSecond>{data.breed}</TextSecond>
                </Items>
                <Items>
                  <TextSecond>{data.location}</TextSecond>
                </Items>
                <Items>
                  <TextSecond>{data.sex}</TextSecond>
                </Items>
                <Items>
                  <TextSecond>{data.owner.email}</TextSecond>
                </Items>
                <Items>
                  <TextSecond>{data.owner.phone}</TextSecond>
                </Items>
                {data.price ? (
                  <Items>
                    <TextSecond>{data.price}$</TextSecond>
                  </Items>
                ) : null}
              </SecondList>
            </ListWrapper>
          </div>
        </WrapperForDesc>

        <div>
          <P>
            <Span>Comments:</Span> {data.comments}
          </P>
        </div>
        <ListButtons>
          <ItemContact>
            <Link href={`tel:${data.owner.phone}`}>
              <ContactText>Contact</ContactText>
            </Link>
          </ItemContact>
          <li>
            {isFavorite ? (
              <Btn
                type="button"
                onClick={() => {
                  console.log(data._id);
                  dispatch(deleteFavorites(data._id));
                  setIsFavorite(null);
                }}
              >
                <TxtWrapper>
                  <TextBtn>Remove from </TextBtn>
                  <SvgHeart>
                    <use href={heart + '#heart-button'}></use>
                  </SvgHeart>
                </TxtWrapper>
              </Btn>
            ) : isAuth ? (
              <Btn
                type="button"
                onClick={() => dispatch(addFavorites(data._id))}
              >
                <TxtWrapper>
                  <TextBtn>Add to</TextBtn>
                  <SvgHeart>
                    <use href={heart + '#heart-button'}></use>
                  </SvgHeart>
                </TxtWrapper>
              </Btn>
            ) : (
              <>
                {' '}
                {/* <ToastContainer /> */}
                <Btn type="button" onClick={handleClick}>
                  <TxtWrapper>
                    <TextBtn>Add to</TextBtn>
                    <SvgHeart>
                      <use href={heart + '#heart-button'}></use>
                    </SvgHeart>
                  </TxtWrapper>
                </Btn>{' '}
              </>
            )}
          </li>
        </ListButtons>

        <CloseBtn
          type="button"
          onClick={() => {
            dispatch(closeLearnMoreModal());
          }}
        >
          <Svg>
            <use href={modalClose + '#close-small-modal-mobile'}></use>
          </Svg>
        </CloseBtn>
      </Div>
    </Overlay>,

    modalRoot
  );
};

export default ModalNotice;
