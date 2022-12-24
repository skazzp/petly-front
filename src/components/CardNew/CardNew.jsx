import {
  Checkbox,
  Content,
  Data,
  Footer,
  Label,
  Link,
  Span,
  Strip,
  Title,
  Wrapper,
} from './CardNew.styled';
import { v4 as uuidv4 } from 'uuid';

export const CardNew = ({ news }) => {
  const { title, url, description, date } = news;

  const id = uuidv4();

  const newDescriptionStart = description.slice(0, 200);
  const newDescriptionEnd = description.slice(200);

  const more = () => {
    return <a href="#">more</a>;
  };

  return (
    <>
      <Wrapper>
        <div>
          <Strip />
          <Title>{title || 'no title'}</Title>
          <Content>
            <p><Checkbox type="checkbox" id={id} />
            {newDescriptionStart || 'no description'}`
            <Span>{newDescriptionEnd}</Span>
            <Label for={id} /></p>
          </Content>
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
