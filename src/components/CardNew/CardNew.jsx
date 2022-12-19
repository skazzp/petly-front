import { Content, Data, Footer, Link, Main, Strip, Title, Wrapper } from './CardNew.styled';




  

export const CardNew = ({news}) => {
  const {title, url, description, date} = news
  
  return (
    <>
      <Wrapper>
        <div>
          <Strip />
          <Title>{title ||"not title"}</Title>
          <Content>
          {description ||"not description"}
          </Content>
          </div>
        <Footer>
          <Data>{date||"no data"}</Data>
          <Link href={url} target="_blank">Read more</Link>
        </Footer>
      </Wrapper>
    </>
  );
};
