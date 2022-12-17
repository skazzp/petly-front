import { Content, Data, Footer, Link, Main, Strip, Title, Wrapper } from './CardNew.styled';

export const CardNew = () => {
  return (
    <>
      <Wrapper>
          <Strip />
          <Title>Обережно, кліщі! Як уберегти улюбленця </Title>
          <Content>
            Травневі прогулянки з улюбленцем не лише приємні, але й потребують
            пильності. З початком теплої пори року активізуються кліщі, і треба
            бути уважним, щоб уберегти свого песика чи котика від дуже серйозних
            неприємностей зі здоров`ям.
          </Content>
        <Footer>
          <Data>20/02/2021</Data>
          <Link href="#" target="_blank">Read more</Link>
        </Footer>
      </Wrapper>
    </>
  );
};
