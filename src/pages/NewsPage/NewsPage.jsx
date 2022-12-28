import { CardNew } from 'components/CardNew';
import PaginationNotices from 'components/PaginationNotices/PaginationNotices';
import { Searchbar } from 'components/Searchbar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getByQueryNews, getNews } from 'redux/news/newsOperations';
import {
  selectNews,
  selectSpinetToggle,
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
import { LoaderSpiner } from 'components/LoaderSpiner/LoaderSpiner';

const NewsPage = () => {
  const [search, setSearch] = useSearchParams();
  const page = search.get('page');
  const spiner = useSelector(selectSpinetToggle);
console.log(spiner);
  const location = useLocation();



  const dispatch = useDispatch();
  const searchNews = query => {
    dispatch(getByQueryNews(query));
  };


  const f = loc => {
    if (location.pathname === '/news' || location.pathname === '/news/') {
      return dispatch(getNews(page));}
      // if (location.pathname === '/news/search' || location.pathname === '/news/search/') {
      //   return dispatch(searchNews);
      // }
    }
  


  const newss = useSelector(selectNews);
  const totalPages = useSelector(selectTotalPages);
console.log(newss);
  if(newss === null){
    toast.error('Not found!');
  }
 
 
  useEffect(() => {
    dispatch(getNews());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    f(location);
      // eslint-disable-next-line
  }, [location]);
  return (
    !spiner?
    (<Wrapper>
      <Title>News</Title>
      <Searchbar submitForm={searchNews} />
      <WrapperList>
        <ListCard>
          {newss?.news?.map(value => (
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
    </Wrapper>):(<LoaderSpiner/>)
  )}
;

export default NewsPage;
