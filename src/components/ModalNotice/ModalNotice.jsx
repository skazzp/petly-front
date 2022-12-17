import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeLearnMoreModal } from 'redux/notice/noticeSlice';
import modalClose from '../../assets/images/icons.svg';
import heart from '../../assets/images/icons.svg';
import dog from '../../assets/images/mobile.png';
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

  // console.log(data);
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

  return createPortal(
    <Overlay onClick={backDropCloseModal}>
      <Div>
        <WrapperForDesc>
          <ImageWrapper>
            <Status>
              <StatusText>{data.category}</StatusText>
            </Status>
            <Img src={!data.photoURL && dog} alt="Animal"></Img>
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
                <Items>
                  <Text>Sell:</Text>
                </Items>
              </FirstList>
              <SecondList>
                <Items>
                  <TextSecond>{data.name}</TextSecond>
                </Items>
                <Items>
                  <TextSecond>{data.birthday.slice(0, 10)}</TextSecond>
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
                  <TextSecond>user@mail.com</TextSecond>
                </Items>
                <Items>
                  <TextSecond>+380971234567</TextSecond>
                </Items>
                {data.price && (
                  <Items>
                    <TextSecond>{data.price}$</TextSecond>
                  </Items>
                )}
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
            <Link href="tel:+380971234567">
              <ContactText>Contact</ContactText>
            </Link>
          </ItemContact>
          <li>
            <Btn>
              <TxtWrapper>
                <TextBtn>Add to</TextBtn>
                <SvgHeart>
                  <use href={heart + '#heart-button'}></use>
                </SvgHeart>
              </TxtWrapper>
            </Btn>
          </li>
        </ListButtons>

        <CloseBtn type="button" onClick={() => dispatch(closeLearnMoreModal())}>
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
