// BiSearchAlt2
import { CardNew } from 'components/CardNew';
import { ItemCard, ListCard } from 'components/CardNew/CardNew.styled';
import { Searchbar } from 'components/Searchbar';

import { Title, Wrapper } from './NewPage.styled';
const NewPage = () => {
  // const data = [0,1,2,3,4,5]
  return (
    <Wrapper>
      <Title>News</Title>
      <Searchbar />
      <ListCard>
        <ItemCard><CardNew /></ItemCard>
        <ItemCard><CardNew /></ItemCard>
        <ItemCard><CardNew /></ItemCard>
        <ItemCard><CardNew /></ItemCard>
        <ItemCard><CardNew /></ItemCard>
        <ItemCard><CardNew /></ItemCard>
      </ListCard>
      {/* <ul>
            {data?.results.map(value => (
              <li key={value.id}>
                <Link to={`/movies/${value.id}`} state={{ from: location }}>
                  <Card item={value} />
                </Link>
              </li>
            ))}
          </ul> */}
    </Wrapper>
  );
};

export default NewPage;
