import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { TextField } from '@mui/material';

const DrawerComponents: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Tolov To'lash
      </Button>
      <Drawer title="O'quvchilar" onClose={onClose} open={open}>
      <TextField
            autoFocus
            required
            margin="dense"
            id="search"
            name="search"
            label="O'quvchilarni Ismini Kiriting"
            type="search"
            fullWidth
            variant="standard"
          />

      </Drawer>
    </>
  );
};

export default DrawerComponents;