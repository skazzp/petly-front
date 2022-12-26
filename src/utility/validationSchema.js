import * as Yup from 'yup';
require('yup-phone');

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationSchemaUserUpdate = Yup.object().shape({
  email: Yup.string().email('Incorrect email').required('Missing email'),
  name: Yup.string()
    .min(3, 'Too short name')
    .max(30, 'Too long name')
    .required('Missing name'),
  birthday: Yup.date()
    .min(new Date('1970/01/01'), 'Wrong date!')
    .max(new Date('9999/12/31'), 'Wrong date!'),
  city: Yup.string().min(3, '3 chars minimum').required('Missing city'),
  phone: Yup.string().matches(phoneRegExp, 'Not valid phone number'),

  // phone: Yup.string()
  //   .phone()
  //   .typeError('Not valid phone')
  //   .required('enter your phone, please'),
});
