import RPE from '../../routes/RPE';
import { Box, Button, Modal } from '@mui/material';
import { useState } from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const TopRow = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    position: 'absolute' as 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: '95%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    overflow: 'scroll',
    p: 4,
  };

  return (
    <div className='w-full flex flex-row pl-4 pr-4'>
      <span
        className='p-2 flex justify-center'
        style={{ flex: '1 1 10%' }}>
        Set
      </span>
      <span
        className='p-2 flex justify-center'
        style={{ flex: '1 1 22.5%' }}>
        Weight
      </span>
      <span
        className='p-2 flex justify-center'
        style={{ flex: '1 1 22.5%' }}>
        Reps
      </span>
      <span
        className='p-2 flex justify-center'
        style={{ flex: '1 1 22.5%' }}>
        Target
      </span>
      <span
        className='p-2 flex justify-center'
        style={{ flex: '1 1 22.5%' }}
        onClick={handleOpen}>
        RPE
        <sup className='text-xs'>
          <HelpOutlineIcon fontSize='inherit' />
        </sup>
      </span>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <RPE></RPE>
          <div className='flex justify-center'>
            <Button
              variant='contained'
              className='just justify-center flex'
              onClick={handleClose}>
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default TopRow;
