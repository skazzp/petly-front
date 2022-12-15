// BiSearchAlt2
import { Header } from 'components/Header/Header';
import { Searchbar } from 'components/Searchbar';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Content, Input, InputWrapper, Strip, Title, Wrapper } from './NewPage.styled';
const NewPage = () => {
  return (
    <Wrapper>
      <Header/>
      <Title>News</Title>
      <Searchbar/>
      <Strip/>
      <Content>test</Content>
    </Wrapper>
  );
};

export default NewPage;
