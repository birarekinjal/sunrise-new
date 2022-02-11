import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Fab from '@mui/material/Fab';
import Button from '../button/button';
import './modal.scss';
import { CustomModalProps } from './modalModal';

const CustomModal: React.FC<CustomModalProps> = ({
  children,
  buttons,
  title,
  isModalVisible,
  toggleModal,
}) => {
  return (
    <>
   <Dialog onClose={toggleModal} open={isModalVisible} >
     <DialogTitle>
      {title}
      <Fab size="small" color="inherit" aria-label="add" onClick={toggleModal}>
        <CloseIcon />
      </Fab>
     </DialogTitle>
     <DialogContent>
        {children}
     </DialogContent>
     <DialogActions>
     {buttons &&
          buttons.map((btn:any) => {
            return (
              <Button
                disabled={btn.isDisabled}
                isLoading={btn.isLoading}
                label={btn.label}
                onClick={btn.onClick}
                className={btn.className}
                color={btn.color || 'primary'}
                variant={btn.variant || 'primary'}
              />
            );
          })}
     </DialogActions>
   </Dialog>
   </>
  );
};

export default CustomModal;
