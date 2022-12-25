import { GlobalStyleRegistration ,Div} from "pages/RegistrationPage/RegistrationPage.styled";
import { Validation } from "utility/validationStyle";
import { ButtonSend,DivBox, Form, Input, Label, SelectContainer , Title } from "./ChatPage.styled";
import Select from 'react-select';

const Chat = () => {
  return (<Div>
       <DivBox>
      <Title>Chat </Title>
        <Form onSubmit={"sad"}>
          <Label>
            <Input
            ></Input>
            {/* {formik.errors.name && formik.touched.name ? (
              <Validation>{formik.errors.name}</Validation>
            ) : null} */}
          </Label>
        <Label>
          <SelectContainer>
              <Select
                // placeholder="City"
                // defaultValue={city}
                // id="city"
                //   name="city"
                //   onBlur={formik.handleBlur}
                // styles={selectStyles()}
                // options={Selectoptions}
                // onChange={e => setCity(e.value)}
                // defaultInputValue={city}
              ></Select>
            </SelectContainer></Label>
            

            {/* {formik.errors.city && formik.touched.city ? (
              <Validation>{formik.errors.city}</Validation>
            ) : null} */}
          <ButtonSend> Send
          </ButtonSend>
        </Form>
    </DivBox>
      <GlobalStyleRegistration/>
    </Div>);
}
 
export default Chat;