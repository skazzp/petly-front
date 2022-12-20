import {
  Content,
  Data,
  Footer,
  Link,
  Strip,
  Title,
  Wrapper,
} from './CardNew.styled';

export const CardNew = ({ news }) => {
  const { title, url, description, date } = news;

  return (
    <>
      <Wrapper>
        <div>
          <Strip />
          <Title>{title || 'no title'}</Title>
          <Content>{description || 'no description'}</Content>
        </div>
        <Footer>
          <Data>{date || ''}</Data>
          <Link href={url} target="_blank">
            Read more
          </Link>
        </Footer>
      </Wrapper>
    </>
  );
};
