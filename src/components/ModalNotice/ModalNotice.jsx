import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeLearnMoreModal, closeModal } from 'redux/notice/noticeSlice';
// import { openLearnMoreModal } from 'redux/notice/noticeSlice';
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
  return createPortal(
    <Overlay>
      <Div>
        <WrapperForDesc>
          <ImageWrapper>
            <Status>
              <StatusText>Sell</StatusText>
            </Status>
            <Img src={dog} alt="Animal"></Img>
          </ImageWrapper>
          <div>
            <Title>Сute dog looking for a home</Title>
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
                  <Text>Lovation:</Text>
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
                  <TextSecond>Rich</TextSecond>
                </Items>
                <Items>
                  <TextSecond>21.09.2020</TextSecond>
                </Items>
                <Items>
                  <TextSecond>Pomeranian</TextSecond>
                </Items>
                <Items>
                  <TextSecond>Lviv</TextSecond>
                </Items>
                <Items>
                  <TextSecond>male</TextSecond>
                </Items>
                <Items>
                  <TextSecond>user@mail.com</TextSecond>
                </Items>
                <Items>
                  <TextSecond>+380971234567</TextSecond>
                </Items>
                <Items>
                  <TextSecond>150$</TextSecond>
                </Items>
              </SecondList>
            </ListWrapper>
          </div>
        </WrapperForDesc>

        <div>
          <P>
            <Span>Comments:</Span> Lorem ipsum dolor sit amet, consectetur Lorem
            ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur Lorem
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
