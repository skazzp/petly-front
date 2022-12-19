import UserDataItem from 'components/UserDataItem/UserDataItem';
import { Container, Title } from './UserData.styled';

const UserData = () => {
  return (
    <Container>
      <Title>My information:</Title>
      <UserDataItem />
    </Container>
  );
};

export default UserData;
