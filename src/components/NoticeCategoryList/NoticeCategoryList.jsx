import { LoaderSpiner } from 'components/LoaderSpiner/LoaderSpiner';
import ModalNotice from 'components/ModalNotice/ModalNotice';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/authSelectors';
import { getAllNotices, getByCategory } from 'redux/notice/noticeOperations';
import { selectNotices, selectTotalPages } from 'redux/notice/noticeSelectors';
import { List, Wrapper } from './NoticeCategoryList.styled';
// import defaultCat from '../../assets/images/cats-default.png';
// import defaulDog from '../../assets/images/default-pets.png';
import defaultCats from '../../assets/images/cats.png';
import PaginationNotices from 'components/PaginationNotices/PaginationNotices';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const NoticeCategoryList = () => {
  const notices = useSelector(selectNotices);
  const selectTotalPage = useSelector(selectTotalPages);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const [search, setSearch] = useSearchParams();
  // const [totalPage, setTotalPage] = useState(1);
  const page = search.get('page');
  console.log(page);

  // console.log(notices.totalPages);
  // useEffect(() => {
  //   dispatch(getAllNotices());
  // }, [dispatch]);
  const location = useLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const f = loc => {
    if (location.pathname === '/notices') {
      // setSearch(1);
      return dispatch(getAllNotices(page));
    }
    // return dispatch(getByCategory());
    return null;
  };
  // useEffect(() => {
  //   dispatch(getAllNotices(page));
  // }, [dispatch, page]);
  useEffect(() => {
    f(location);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const isModalOpen = useSelector(state => state.notice.isLearnMoreModalOpen);

  return isLoading ? (
    <LoaderSpiner />
  ) : (
    <Wrapper>
      {notices && notices.length > 0 ? (
        <List>
          {notices?.map(notice => (
            <NoticeCategoryItem key={notice._id} notice={notice} />
          ))}
        </List>
      ) : (
        <>
          <img src={defaultCats} alt="cat"></img>
          <h1>Not found</h1>
        </>
      )}
      <PaginationNotices
        page={page}
        setSearch={setSearch}
        totalPages={selectTotalPage}
      />
      {isModalOpen && <ModalNotice />}
    </Wrapper>
  );
};

export default NoticeCategoryList;
