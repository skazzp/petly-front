// BiSearchAlt2
import {     CardNew} from 'components/CardNew';
import { Searchbar } from 'components/Searchbar';

import { Title, Wrapper } from './NewPage.styled';
const NewPage = () => {
  return (
    <Wrapper>
      <Title>News</Title>
      <Searchbar/>
        <CardNew/>
        <CardNew/>
        <CardNew/>
        <CardNew/>
        <CardNew/>
        <CardNew/>
    </Wrapper>
  );
};

export default NewPage;
