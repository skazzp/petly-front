import { LoaderSpiner } from 'components/LoaderSpiner/LoaderSpiner';
import ModalNotice from 'components/ModalNotice/ModalNotice';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNotices } from 'redux/notice/noticeOperations';
import {
  selectIsLoading,
  selectNotices,
  selectTotalPages,
} from 'redux/notice/noticeSelectors';
import defaultCats from '../../assets/images/petss.png';
import PaginationNotices from 'components/PaginationNotices/PaginationNotices';
import { useLocation, useSearchParams } from 'react-router-dom';
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

  const dispatch = useDispatch();

  const [search, setSearch] = useSearchParams();
  const page = search.get('page');

  const location = useLocation();

  const f = loc => {
    if (location.pathname === '/notices' || location.pathname === '/notices/') {
      return dispatch(getAllNotices(page));
    }
    return null;
  };

  useEffect(() => {
    f(location);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
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
              <NoticeCategoryItem key={notice._id} notice={notice} />
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
        <LoaderSpiner />
      )}
      {isModalOpen && <ModalNotice />}
    </Wrapper>
  );
};

export default NoticeCategoryList;
