import * as Yup from 'yup';
import { yupMessages } from '../../../../../application/constants/yupMessageConstant';

const { email, required, minPassword, maxPassword } = yupMessages;

const user = Yup.object({
  email: Yup.string().required(required).email(email),
  password: Yup.string()
    .required(required)
    .min(6, minPassword)
    .max(12, maxPassword),
  role: Yup.string().required(required),
  permissions: Yup.array().min(1, required),
});

export default user;
