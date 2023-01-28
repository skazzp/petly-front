import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllNotices,
  getByCategory,
  getByCategoryQuery,
  getByQuery,
} from 'redux/notice/noticeOperations';
import {
  selectIsLoading,
  selectNotices,
  selectTotalPages,
} from 'redux/notice/noticeSelectors';
import { LoaderSpinner } from 'components/LoaderSpinner/LoaderSpinner';
import ModalNotice from 'components/ModalNotice/ModalNotice';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import PaginationNotices from 'components/PaginationNotices/PaginationNotices';
import defaultCats from '../../assets/images/pets.png';
import {
  Img,
  List,
  NotFoundBox,
  Title,
  Wrapper,
} from './NoticeCategoryList.styled';

const NoticeCategoryList = () => {
  const notices = useSelector(selectNotices);
  const selectTotalPage = useSelector(selectTotalPages);
  const isLoading = useSelector(selectIsLoading);
  const location = useLocation();
  const category = location.pathname.split('/')[2];

  const dispatch = useDispatch();

  const [search, setSearch] = useSearchParams();
  const page = search.get('page');
  const query = search.get('text');
  console.log('category :>> ', category);
  console.log('query :>> ', query);

  useEffect(() => {
    if (!category && query) {
      dispatch(getByQuery(query));
    }
    if (category) {
      if (query) {
        console.log('Єта фунция поика по категории');
        dispatch(getByCategoryQuery({ category: category, page, query }));
      } else {
        dispatch(getByCategory({ category: category, page }));
      }
    } else {
      dispatch(getAllNotices(page));
    }
  }, [page, query, dispatch, category]);

  const isModalOpen = useSelector(state => state.notice.isLearnMoreModalOpen);

  return !isLoading && notices.length === 0 ? (
    <NotFoundBox>
      <Title>Nothing found. Please, try again</Title>
      <Img src={defaultCats} alt="cat"></Img>
    </NotFoundBox>
  ) : (
    <Wrapper>
      {notices && notices.length > 0 ? (
        <>
          <List>
            {notices.map(notice => (
              <NoticeCategoryItem
                key={notice._id}
                notice={notice}
                page={page}
              />
            ))}
          </List>
          {selectTotalPage > 1 && (
            <PaginationNotices
              page={page}
              setSearch={setSearch}
              totalPages={selectTotalPage}
            />
          )}
        </>
      ) : (
        <LoaderSpinner />
      )}
      {isModalOpen && <ModalNotice />}
    </Wrapper>
  );
};

export default NoticeCategoryList;
