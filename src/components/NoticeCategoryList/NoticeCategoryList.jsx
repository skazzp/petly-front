import { LoaderSpiner } from 'components/LoaderSpiner/LoaderSpiner';
import ModalNotice from 'components/ModalNotice/ModalNotice';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/authSelectors';
import { getAllNotices } from 'redux/notice/noticeOperations';
import { selectNotices } from 'redux/notice/noticeSelectors';
import { List, Wrapper } from './NoticeCategoryList.styled';
// import defaultCat from '../../assets/images/cats-default.png';
// import defaulDog from '../../assets/images/default-pets.png';
import defaultCats from '../../assets/images/cats.png';

const NoticeCategoryList = () => {
  const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNotices());
  }, [dispatch]);

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

      {isModalOpen && <ModalNotice />}
    </Wrapper>
  );
};

export default NoticeCategoryList;
