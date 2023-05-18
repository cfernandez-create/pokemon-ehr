import React from 'react';
import { Dialog, DialogTitle, DialogContent, makeStyles } from '@material-ui/core';
import Admit from './Admit';

const useStyles = makeStyles((theme) => ({
    dialog: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.up('sm')]: {
        alignItems: 'flex-start',
        height: '600px',
      },
    },
    content: {
      padding: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        width: '400px', // Adjust the width as needed
      },
    },
  }));

export default function Popup(props) {
  const { title, openPopup, setOpenPopup, handleClosePopup } = props;
  const classes = useStyles();

  return (
    <Dialog open={openPopup} onClose={handleClosePopup} className={classes.dialog}>
      <DialogTitle>
        <div>{title}</div>
      </DialogTitle>
      <DialogContent className={classes.content}>
        <Admit handleClosePopup={handleClosePopup} />
      </DialogContent>
    </Dialog>
  );
}
