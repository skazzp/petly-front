import { CardNew } from 'components/CardNew';
import PaginationNotices from 'components/PaginationNotices/PaginationNotices';
import { Searchbar } from 'components/Searchbar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getByQueryNews, getNews } from 'redux/news/newsOperations';
import {
  selectNews,
  selectTotalPages,
} from 'redux/news/newsSelectors';

import {
  ItemCard,
  ListCard,
  Title,
  Wrapper,
  WrapperList,
} from './NewsPage.styled';
import { toast } from 'react-toastify';

const NewsPage = () => {
  const [search, setSearch] = useSearchParams();
  const page = search.get('page');

  const location = useLocation();

  const f = loc => {
    if (location.pathname === '/news' || location.pathname === '/news/') {
      return dispatch(getNews(page));
    }
  };

  const newss = useSelector(selectNews);
  const totalPages = useSelector(selectTotalPages);

  if(newss === null){
    toast.error('Not found!');
  }
  const dispatch = useDispatch();

  const searchNews = query => {
    dispatch(getByQueryNews(query));
  };

  useEffect(() => {
    dispatch(getNews());
    console.log('11111111111');
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    f(location);
    console.log('222222222222');
      // eslint-disable-next-line
  }, [location]);

  return (
    <Wrapper>
      <Title>News</Title>
      <Searchbar submitForm={searchNews} />
      <WrapperList>
        <ListCard>
          {newss?.map(value => (
            <ItemCard key={value?._id}>
              <CardNew news={value} />
            </ItemCard>
          ))}
        </ListCard>
        {totalPages > 1 && (
          <PaginationNotices
            page={page}
            setSearch={setSearch}
            totalPages={totalPages}
          />
        )}
      </WrapperList>
    </Wrapper>
  );
};

export default NewsPage;
