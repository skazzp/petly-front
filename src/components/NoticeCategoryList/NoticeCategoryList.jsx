import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNotices, getByQuery } from 'redux/notice/noticeOperations';
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

  const dispatch = useDispatch();

  const [search, setSearch] = useSearchParams();
  const page = search.get('page');
  const query = search.get('text');

  useEffect(() => {
    if (query) {
      dispatch(getByQuery(query));
    } else {
      dispatch(getAllNotices(page));
    }
  }, [page, query, dispatch]);

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
