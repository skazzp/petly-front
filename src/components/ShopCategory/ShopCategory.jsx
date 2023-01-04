// import Friends from 'components/Friends/Friends';
// import { ItemCard } from 'pages/FriendsPage/FriendsPage.styled';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOurFriends } from 'redux/ourFriend/ourFriendOperations';
import { selectOurFriends } from 'redux/ourFriend/ourFriendSelectors';
import { data } from './categoriData';
import {
  ButtonScroll,
  CategoriBox,
  Div,
  Img,
    List,
  TitlePrimer,
  ScrollContainer,
  Title,
} from './ShopCategory.styled';

const ShopPage = () => {
  const dataFriends = useSelector(selectOurFriends);

  const [scroll, setScroll] = useState(0);
  const [intervalEnd, setIntervalEnd] = useState(0);
  const [intervalStart, setIntervalStart] = useState(0);
  const [whidse, SetWhidse] = useState(null);
  const listCOntainer = document.querySelector('#SkrollList');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOurFriends());
  }, [dispatch,]);
    
    useEffect(() => {
    SetWhidse(document.querySelector('#SkrollList')?.scrollWidth);
  // eslint-disable-next-line
  }, [dataFriends,data]);
  
  listCOntainer?.scroll({ left: scroll, behavior: 'smooth' });
  function onHoverSkrollStart() {
    let start = setInterval(
      () => setScroll(prev => (prev > 0 ? prev - 25 : prev)),
      100
    );
    setIntervalStart(start);
  }

  function onHoverSkrollEnd() {
    let end = setInterval(
      () => setScroll(prev => (prev < whidse ? prev + 25 : prev)),
      100
    );
    setIntervalEnd(end);
  }
  function stopEnd() {
    clearInterval(intervalEnd);
    clearInterval(intervalStart);
  }

  return (
      <Div>
          <TitlePrimer>Popular Items</TitlePrimer>
      <ScrollContainer>
        <ButtonScroll
          onMouseEnter={() => onHoverSkrollStart()}
          onMouseLeave={() => stopEnd()}
              >«</ButtonScroll>
              <List id="SkrollList">
                  {data.map(({ title, img }) => {
                      return (<CategoriBox>
                          {/* <div></div> */}
                          <Img src={img}></Img>
                          <Title>{title}</Title>
                      </CategoriBox>)
                  })}
          {/* {dataFriends?.map(value => (
            <ItemCard key={value?._id}>
              <Friends friends={value} />
            </ItemCard>
          ))} */}
        </List>
        <ButtonScroll
          onMouseEnter={() => onHoverSkrollEnd()}
          onMouseLeave={() => stopEnd()}
        >»</ButtonScroll>
      </ScrollContainer>
    </Div>
  );
};

export default ShopPage;
