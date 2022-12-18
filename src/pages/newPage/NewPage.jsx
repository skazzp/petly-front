// BiSearchAlt2
import { CardNew } from 'components/CardNew';
import { ItemCard, ListCard } from 'components/CardNew/CardNew.styled';
import { Searchbar } from 'components/Searchbar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from 'redux/news/newsOperations';
import { selectNews } from 'redux/news/newsSelectors';
import { Title, Wrapper } from './NewPage.styled';

const NewPage = () => {

  
  const news = useSelector(selectNews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <Title>News</Title>
      <Searchbar />
      <ListCard>
      {news?.map(value => (
        <ItemCard  key={news._id}><CardNew news={value} /></ItemCard>
        ))}
      </ListCard>
      {/* <ul>
            // {news?.map(value => (
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
