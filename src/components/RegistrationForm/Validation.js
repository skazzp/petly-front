import * as yup from 'yup';

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
  name: yup.string().required('enter your Name, please'),
  city: yup.string().required('chenge your city, please'),
  phone: yup.string().required('enter your adress, please'),
});
