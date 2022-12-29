import * as yup from 'yup';
const today = new Date();

export const validationsSchema = yup.object().shape({
  name: yup
    .string()
    .typeError('String')
    .required('Name is required!')
    .matches(
      /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
      'Minimum 2 letters required'
    )
    .min(2, 'Minimum 2 letters required')
    .max(16, 'Maximum 16 letters required'),
  dateOfBirth: yup
    .date()
    .max(today, 'The maximum date is today')
    .required(' Date of Birth is required (example: 22.10.2022'),
  breed: yup
    .string()
    .required('Breed is required, even if the pet is purebred')
    .matches(
      /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
      'Minimum 2 letters required'
    )
    .min(2, 'Minimum 2 letters required')
    .max(24, 'Maximum 24 letters required'),
  comments: yup
    .string()
    .required('Comments are required')
    .min(8, 'Minimum 8 letters required')
    .max(120, 'Maximum 120 letters required'),
  image: yup.mixed().required('Image is required'),
});
