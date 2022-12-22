import {
  Wrapper,
  Container,
  Img,
  Title,
  WrapperIMG,
  WrapperContent,
  Data,
  Address,
  Email,
  Phone,
  IconAddress,
  WrapperTimeHover,
} from './Friends.styled';
import no_foto from '../../assets/images/not_found.jpg';
import { v4 as uuidv4 } from 'uuid';


const Friends = ({ friends }) => {
  const {
    title,
    address,
    addressUrl,
    email,
    imageUrl,
    phone,
    url,
    workDays,
  } = friends;

  const buttonAddress = () => {
    if (!addressUrl) {
      return '';
    }
    return (
      <a href={addressUrl} target="_blank" rel="noreferrer">
        <IconAddress />
      </a>
    );
  };
  const week = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const newWorkDays = workDays?.map((item, i) => {
    return { ...item, week: week[i] };
  });

  const fullTime = arr => {
    const result = arr?.map(item => {
      if (item.isOpen) {
        return (
          
            <li key={uuidv4()}
          >
            <span>{item.week}</span>
            {item.from}:{item.to}
          </li>
          
          
        );
      }
      return (
        <li key={uuidv4()}>
          <span>{item.week}</span>
          --:--
        </li>
      );
    });

    return result;
  };

  const timeOne = arr => {
    const result = arr?.find(item => item.isOpen);
    return result ? (
      <p>
        {result?.from}:{result?.to}
      </p>
    ) : (
      '----------------------------------'
    );
  };

  return (
    <Container>
      <Title href={url} target="_blank">
        {title}
      </Title>
      <Wrapper>
        <WrapperIMG>
          <Img src={imageUrl || no_foto}></Img>
        </WrapperIMG>
        <WrapperContent>
          <Data>
            Time: <br />
            {newWorkDays
              ? timeOne(newWorkDays)
              : '----------------------------------'}
            <WrapperTimeHover>
             <ul> {fullTime(newWorkDays)
              }</ul>
            </WrapperTimeHover>
          </Data>
          <Address>
            Adress:{buttonAddress()} <br />
            {address || '----------------------------------'}
          </Address>
          <Email>
            Email:
            <br />
            {email || '----------------------------------'}
          </Email>
          <Phone>
            Phone:
            <br />
            {phone || '----------------------------------'}
          </Phone>
        </WrapperContent>
      </Wrapper>
    </Container>
  );
};

export default Friends;

