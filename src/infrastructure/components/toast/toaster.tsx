import { Toaster } from 'react-hot-toast';
import { ToasterProps } from './toasterModal';

const CustomToster: React.FC<ToasterProps> = ({
  position,
  reverseOrder,
  gutter,
}) => {
  return (
    <>
      <Toaster
        position={position}
        reverseOrder={reverseOrder}
        gutter={gutter}
        toastOptions={{ duration: 3000 }}
      />
    </>
  );
};

export default CustomToster;
