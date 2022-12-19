// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import { CardOurFriend } from 'components/CardOurFriend';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOurFriends } from 'redux/ourFriend/ourFriendOperations';
import { selectOurFriends } from 'redux/ourFriend/ourFriendSelectors';
import { ListCard, Title, Wrapper } from './OurFruend.styled';

const OurFriend = () => {
  const news = useSelector(selectOurFriends);
  console.log(news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOurFriends());
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <Title>Our friend</Title>
      <ListCard>
        <CardOurFriend />
        {/* {news?.map(value => (
        <ItemCard  key={news._id}><CardNew news={value} /></ItemCard>
        ))} */}
      </ListCard>
    </Wrapper>
  );
};

export default OurFriend;
