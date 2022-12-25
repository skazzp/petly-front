import { CardNew } from 'components/CardNew';
import { Searchbar } from 'components/Searchbar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getByQueryNews, getNews } from 'redux/news/newsOperations';
import { selectNews } from 'redux/news/newsSelectors';
import { ItemCard, ListCard, Title, Wrapper, WrapperList } from './NewsPage.styled';


const NewsPage = () => {
  const news = useSelector(selectNews);
  const dispatch = useDispatch();



  const searchNews = query => {
    dispatch(getByQueryNews(query));
  };

  useEffect(() => {
    dispatch(getNews());
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <Title>News</Title>
      <Searchbar submitForm={searchNews}/>
      <WrapperList>
      <ListCard>
        {news?.map(value => (
          <ItemCard key={value?._id}>
            <CardNew news={value} />
          </ItemCard>
        ))}
      </ListCard>
      </WrapperList>
    </Wrapper>
  );
};

export default NewsPage;
