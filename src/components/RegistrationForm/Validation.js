import * as yup from 'yup';
require('yup-phone');
export const schema = yup.object().shape({
  email: yup.string().email().required('enter your E-mail, please'),
  password: yup
    .string()
    .min(7, 'min Password 7 simvols')
    .max(32, 'max Password 32 simvols')
    .required('enter your Password, please'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('confirm password, please'),
  name: yup
    .string()
    .min(2, 'min name 2 simvols')
    .max(16, 'max name 16 simvols')
    .required('enter your Name, please'),
  city: yup.string().required('chenge your city, please'),
  phone: yup
    .string()
    .phone()
    .typeError('not Valid phone')
    .required('enter your phone, please'),
});
