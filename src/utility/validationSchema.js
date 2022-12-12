import * as Yup from 'yup';

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string().email('Incorrect email').required('Missing email'),
  password: Yup.string()
    .min(6, 'Password should be 8 chars minimum')
    .max(12, 'Password should be 12 chars maximum')
    .required('Missing password'),
});

export const validationSchemaRegister = Yup.object().shape({
  email: Yup.string().email('Incorrect email').required('Missing email'),
  password: Yup.string()
    .min(6, 'Password should be 6 chars minimum')
    .max(12, 'Password should be 12 chars maximum')
    .required('Missing password'),
  confirmPassword: Yup.string()
    .required('Your passwords do not match')
    .oneOf([Yup.ref('password')], 'Your passwords do not match'),
  firstName: Yup.string()
    .min(1)
    .max(12, 'First name should be 12 chars maximum.')
    .required('Missing first name'),
});

let patternTwoDigisAfterComma = /^\d+(\.\d{0,2})?$/;

export const validationSchemaAddTransaction = Yup.object().shape({
  sum: Yup.number()
    // .positive('Wrong sum!')
    .required('Enter sum!')
    .test('Is positive?', 'Must be greater than 0!', value => value > 0)
    .test(
      'is-decimal',
      'The amount should be a decimal with maximum two digits after comma',
      val => {
        if (val !== undefined) {
          return patternTwoDigisAfterComma.test(val);
        }
        return true;
      }
    ),
  category: Yup.mixed().required('Select category!'),
  date: Yup.date()
    .min(new Date('1970/01/01'), 'Wrong date!')
    .max(new Date('9999/12/31'), 'Wrong date!')
    .required('Choose date!'),
});
