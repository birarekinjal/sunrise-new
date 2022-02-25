import * as Yup from 'yup';

const resetPassword = Yup.object({
  password: Yup.string()
    .required('This field is required.')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
  confirm_password: Yup.string()
    .required('This field is required.')
    .oneOf([Yup.ref('password')], 'New password & confirm password must match.')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
});

export default resetPassword;
