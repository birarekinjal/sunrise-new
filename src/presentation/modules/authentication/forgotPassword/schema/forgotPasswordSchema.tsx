import * as Yup from 'yup';


const forgotPassword = Yup.object({
  email: Yup.string()
    .required('This field is required.')
    .email('Email is invalid'),
});

export default forgotPassword;