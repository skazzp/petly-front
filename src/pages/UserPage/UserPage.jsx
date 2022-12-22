import PetsData from 'components/PetsData/PetsData';
import UserData from 'components/UserData/UserData';
import { Container } from './UserPage.styled';

const UserPage = () => {
  return (
    <Container>
      <UserData />
      <PetsData />
    </Container>
  );
};

export default UserPage;
