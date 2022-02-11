export type DialogTitleProps = {
  id: string;
  children?: React.ReactNode;
  onClose?: () => void;
};

export type CustomModalProps = {
  buttons?: any;
  children?: React.ReactNode;
  title?: string;
  isModalVisible?: any;
  toggleModal?: any;
};