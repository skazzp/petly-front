
import Friends from 'components/Friends/Friends';
import { ItemCard, ListCard, Title, Wrapper } from './FriendsPage.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOurFriends } from 'redux/ourFriend/ourFriendOperations';
import { selectOurFriends } from 'redux/ourFriend/ourFriendSelectors';

const FriendsPage = () => {
  const dispatch = useDispatch();
  const dataFriends = useSelector(selectOurFriends);
  
  useEffect(() => {
    dispatch(getOurFriends());
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>Our friend</Title>
      {/* <WrapperList> */}
      <ListCard>
        {dataFriends?.map(value => (
          <ItemCard key={value?._id}>
            <Friends friends={value} />
          </ItemCard>
        ))}
      </ListCard>
      {/* </WrapperList> */}
      
    </Wrapper>
  );
};

export default FriendsPage;
