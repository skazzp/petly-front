import modalClose from '../../assets/images/icons.svg';
import heart from '../../assets/images/icons.svg';
import dog from '../../assets/images/mobile.png';
import {
  Btn,
  Div,
  FirstItems,
  FirstList,
  ImageWrapper,
  ListButtons,
  ListWrapper,
  Overlay,
  P,
  SecondList,
  Status,
  StatusText,
  Svg,
  SvgHeart,
  Text,
  TextBtn,
  TextSecond,
  Title,
  TxtWrapper,
} from './ModalNotice.styled';

const ModalNotice = () => {
  return (
    <Overlay>
      <Div>
        <ImageWrapper>
          <Status>
            <StatusText>Sell</StatusText>
          </Status>
          <img src={dog} alt="animal" width="240"></img>
          <Title>Сute dog looking for a home</Title>
        </ImageWrapper>
        <ListWrapper>
          <FirstList>
            <FirstItems>
              <Text>Name:</Text>
            </FirstItems>
            <FirstItems>
              <Text>Birthday:</Text>
            </FirstItems>
            <FirstItems>
              <Text>Breed:</Text>
            </FirstItems>
            <FirstItems>
              <Text>Lovation:</Text>
            </FirstItems>
            <FirstItems>
              <Text>The sex:</Text>
            </FirstItems>
            <FirstItems>
              <Text>Email:</Text>
            </FirstItems>
            <FirstItems>
              <Text>Phone:</Text>
            </FirstItems>
            <FirstItems>
              <Text>Sell:</Text>
            </FirstItems>
          </FirstList>
          <SecondList>
            <li>
              <TextSecond>Rich</TextSecond>
            </li>
            <li>
              <TextSecond>21.09.2020</TextSecond>
            </li>
            <li>
              <TextSecond>Pomeranian</TextSecond>
            </li>
            <li>
              <TextSecond>Lviv</TextSecond>
            </li>
            <li>
              <TextSecond>male</TextSecond>
            </li>
            <li>
              <TextSecond>user@mail.com</TextSecond>
            </li>
            <li>
              <TextSecond>+380971234567</TextSecond>
            </li>
            <li>
              <TextSecond>150$</TextSecond>
            </li>
          </SecondList>
        </ListWrapper>
        <div>
          <P>
            <b>Comments:</b> Lorem ipsum dolor sit amet, consectetur Lorem ipsum
            dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
            Lorem
          </P>
        </div>
        <ListButtons>
          <li>
            <Btn>Contact</Btn>
          </li>
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

        <div type="button">
          <Svg>
            <use href={modalClose + '#closeModal-button-mobile'}></use>
          </Svg>
        </div>
      </Div>
    </Overlay>
  );
};

export default ModalNotice;
