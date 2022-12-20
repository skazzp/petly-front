import { CardNew } from 'components/CardNew';
import { Searchbar } from 'components/Searchbar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from 'redux/news/newsOperations';
import { selectNews } from 'redux/news/newsSelectors';
import { ItemCard, ListCard, Title, Wrapper } from './NewsPage.styled';

const NewsPage = () => {
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
          <ItemCard key={value?._id}>
            <CardNew news={value} />
          </ItemCard>
        ))}
      </ListCard>
    </Wrapper>
  );
};

export default NewsPage;
