/* eslint-disable react/function-component-definition */
/* eslint-disable react/react-in-jsx-scope */
import { Toaster } from 'react-hot-toast';
import { ToasterProps } from './toasterModal';

const CustomToster: React.FC<ToasterProps> = ({
  position,
  reverseOrder,
  gutter,
}) => (
  <Toaster
    position={position}
    reverseOrder={reverseOrder}
    gutter={gutter}
    toastOptions={{ duration: 3000 }}
  />
);

export default CustomToster;
