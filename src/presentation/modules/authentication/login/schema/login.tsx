import * as Yup from 'yup';

const login = Yup.object({
  email: Yup.string()
    .required('This field is required.')
    .email('Enter valid email address.'),
  password: Yup.string()
    .required('This field is required.'),
});

export default login;