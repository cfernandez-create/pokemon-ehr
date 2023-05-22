import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import Admit from './Admit';
import { styled, Theme } from '@mui/material';





export default function Popup(props) {
  const { title, openPopup, setOpenPopup, handleClosePopup } = props;
  

  return (
   
    <Dialog 
    open={openPopup} 
    onClose={handleClosePopup}
    PaperProps={{sx: {position: 'fixed', top: 20}}}>
      <DialogTitle id='alert-dialog-title'>
      </DialogTitle>
      <DialogContent >
     <Admit handleClosePopup={handleClosePopup} /> 
      </DialogContent>
    </Dialog>

  );
}
