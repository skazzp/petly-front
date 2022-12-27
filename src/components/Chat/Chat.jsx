// import { GlobalStyleRegistration } from "pages/RegistrationPage/RegistrationPage.styled";
import { ButtonSend, DivBox, Form, Input, Label, Title } from './Chat.styled';
// import Select from 'react-select';
// import io from 'socket.io-client';

const Chat = ({ type }) => {
  return (
    <DivBox type={type}>
      <Title>Chat </Title>
      <Form>
        <Label>
          <Input></Input>
          {/* {formik.errors.name && formik.touched.name ? (
              <Validation>{formik.errors.name}</Validation>
            ) : null} */}
        </Label>
        <ButtonSend> Send</ButtonSend>
      </Form>
    </DivBox>
  );
};

export default Chat;
