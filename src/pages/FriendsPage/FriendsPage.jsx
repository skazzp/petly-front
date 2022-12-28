
import Friends from 'components/Friends/Friends';
import { ItemCard, ListCard, Title, Wrapper, WrapperList } from './FriendsPage.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOurFriends } from 'redux/ourFriend/ourFriendOperations';
import { selectOurFriends, selectSpinetToggle } from 'redux/ourFriend/ourFriendSelectors';
import { LoaderSpiner } from 'components/LoaderSpiner/LoaderSpiner';

const FriendsPage = () => {
  const dispatch = useDispatch();
  const dataFriends = useSelector(selectOurFriends);
  const spiner = useSelector(selectSpinetToggle);

  
  useEffect(() => {
    dispatch(getOurFriends());
  }, [dispatch]);

  return (
    !spiner?
   ( <Wrapper>
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
      
    </Wrapper>):(<LoaderSpiner/>)
  );
};

export default FriendsPage;
