import {
  Wrapper,
  Container,
  Div,
  Img,
  Title,
  Item,
  List,
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

const Friends = ({ friends }) => {
  const {
    _id,
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
      <a href={addressUrl} target="_blank">
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
          <p key={_id + title}>
            <span>{item.week}</span>
            {item.from}:{item.to}
          </p>
        );
      }
      return (
        <p key={_id + title}>
          <span>{item.week}</span>
          --:--
        </p>
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
              {fullTime(newWorkDays)
              }
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

// isOpen(pin):true
// from(pin):"09:00"
// to(pin):"17:00"

// newWorkDays?newWorkDays?.map(item => findTime(item))

// timeOne(newWorkDays)
