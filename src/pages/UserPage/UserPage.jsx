import PetsData from 'components/PetsData/PetsData';
import UserData from 'components/UserData/UserData';
import { Container } from './UserPage.styled';

export const UserPage = () => {
  return (
    <Container>
      <UserData />
      <PetsData />
    </Container>
  );
};
