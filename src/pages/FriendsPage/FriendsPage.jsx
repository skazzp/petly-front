import Friends from 'components/Friends/Friends';
import {
  ItemCard,
  ListCard,
  Title,
  Wrapper,
  WrapperList,
} from './FriendsPage.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOurFriends } from 'redux/ourFriend/ourFriendOperations';
import {
  selectOurFriends,
  selectSpinnerToggle,
} from 'redux/ourFriend/ourFriendSelectors';
import { LoaderSpinner } from 'components/LoaderSpinner/LoaderSpinner';

export const FriendsPage = () => {
  const dispatch = useDispatch();
  const dataFriends = useSelector(selectOurFriends);
  const spinner = useSelector(selectSpinnerToggle);

  useEffect(() => {
    dispatch(getOurFriends());
  }, [dispatch]);

  return !spinner ? (
    <Wrapper>
      <Title>Our friend</Title>
      <WrapperList>
        <ListCard>
          {dataFriends?.map(value => (
            <ItemCard key={value?._id}>
              <Friends friends={value} />
            </ItemCard>
          ))}
        </ListCard>
      </WrapperList>
    </Wrapper>
  ) : (
    <LoaderSpinner />
  );
};
