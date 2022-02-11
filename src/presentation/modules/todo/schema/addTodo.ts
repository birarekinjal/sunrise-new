import * as yup from 'yup';

const todoSchema = yup.object({
  firstName: yup.string()
    .required('This field is required.')
    .matches(
      /^([a-zA-Z\s])*$/,
      'Numbers and special characters are not allowed.',
    ),
  lastName: yup.string()
    .required('This field is required.')
    .matches(
      /^([a-zA-Z\s])*$/,
      'Numbers and special characters are not allowed.',
    ),
  email: yup.string()
    .required('This field is required.')
    .email('Enter valid email address.'),
});

export default todoSchema;
