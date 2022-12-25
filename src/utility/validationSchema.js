import * as Yup from 'yup';
require('yup-phone');

// export const validationSchemaLogin = Yup.object().shape({
//   email: Yup.string().email('Incorrect email').required('Missing email'),
//   password: Yup.string()
//     .min(6, 'Password should be 8 chars minimum')
//     .max(12, 'Password should be 12 chars maximum')
//     .required('Missing password'),
// });

// export const validationSchemaRegister = Yup.object().shape({
//   email: Yup.string().email('Incorrect email').required('Missing email'),
//   password: Yup.string()
//     .min(6, 'Password should be 6 chars minimum')
//     .max(12, 'Password should be 12 chars maximum')
//     .required('Missing password'),
//   confirmPassword: Yup.string()
//     .required('Your passwords do not match')
//     .oneOf([Yup.ref('password')], 'Your passwords do not match'),
//   firstName: Yup.string()
//     .min(1)
//     .max(12, 'First name should be 12 chars maximum.')
//     .required('Missing first name'),
// });

// let patternTwoDigisAfterComma = /^\d+(\.\d{0,2})?$/;

export const validationSchemaUserUpdate = Yup.object().shape({
  email: Yup.string().email('Incorrect email').required('Missing email'),
  name: Yup.string()
    .min(1)
    .max(30, 'Name should be 30 chars maximum.')
    .required('Missing name'),
  birthday: Yup.date()
    .min(new Date('1970/01/01'), 'Wrong date!')
    .max(new Date('9999/12/31'), 'Wrong date!'),
  city: Yup.string().min(3, '3 chars minimum').required('Missing city'),
  phone: Yup.string()
    .phone()
    .typeError('Not valid phone')
    .required('enter your phone, please'),
});
