import { Wrapper, Container, Div, Img, Title, Item, List, WrapperIMG, WrapperContent, Data, Address, Email, Phone, IconAddress } from './Friends.styled';
import no_foto from "../../assets/images/not_found.jpg"

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

  const buttonAddress = ()=> {
    if(!addressUrl){
      return "";
    }
    return <a href={addressUrl}  target="_blank"><IconAddress/></a>
  }

  return (
    <Container>
      <Title href={url} target="_blank">{title}</Title>
      <Wrapper>
        <WrapperIMG>
          <Img src={imageUrl || no_foto}></Img>
        </WrapperIMG>
       <WrapperContent>
        <Data>Time: <br/></Data>
        <Address>Adress:{buttonAddress() } <br/> {address || "----------------------------------"}</Address>
        <Email>Email:<br/>{email  || "----------------------------------"}</Email>
        <Phone>Phone:<br/>{phone  || "----------------------------------"}</Phone>
        </WrapperContent>
      </Wrapper>
    </Container>
  );
};

export default Friends;
