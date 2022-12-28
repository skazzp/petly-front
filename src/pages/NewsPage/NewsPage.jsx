import { CardNew } from 'components/CardNew';
import PaginationNotices from 'components/PaginationNotices/PaginationNotices';
import { Searchbar } from 'components/Searchbar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useSearchParams } from 'react-router-dom';
import defaultCats from '../../assets/images/petss.png';
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
import { LoaderSpiner } from 'components/LoaderSpiner/LoaderSpiner';
import {
  Img,
  NotFoundBox,
} from 'components/NoticeCategoryList/NoticeCategoryList.styled';

const NewsPage = () => {
  const [search, setSearch] = useSearchParams();
  const page = search.get('page');
  const query = search.get('text');

  const spiner = useSelector(selectSpinetToggle);

  const dispatch = useDispatch();

  const newss = useSelector(selectNews);
  const totalPages = useSelector(selectTotalPages);

  const searchNews = query => {
    dispatch(getByQueryNews(query));
  };

  useEffect(() => {
    if (query) {
      dispatch(getByQueryNews(query));
    } else {
      dispatch(getNews(page));
    }
  }, [page, query, dispatch]);

  return !spiner ? (
    <Wrapper>
      <Title>News</Title>
      <Searchbar submitForm={searchNews} />
      {!newss ? (
        <NotFoundBox>
          <Title>Nothing found. Please, try again</Title>
          <Img src={defaultCats} alt="cat"></Img>
        </NotFoundBox>
      ) : (
        <WrapperList>
          <ListCard>
            {newss?.news?.map(value => (
              <ItemCard key={value?._id}>
                <CardNew news={value} />
              </ItemCard>
            ))}
          </ListCard>
          <Outlet />
          {totalPages > 1 && (
            <PaginationNotices
              page={page}
              setSearch={setSearch}
              totalPages={totalPages}
              search={query}
            />
          )}
        </WrapperList>
      )}
    </Wrapper>
  ) : (
    <LoaderSpiner />
  );
};
export default NewsPage;
