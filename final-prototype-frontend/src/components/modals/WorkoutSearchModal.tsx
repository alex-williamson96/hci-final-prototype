import { Box, Modal, Typography } from '@mui/material';

interface WorkoutSearchModalProps {
  open: boolean;
  handleClose: () => void;
  label: string;
  description: string;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '60%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: '90%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const WorkoutSearchModal = ({
  open,
  handleClose,
  label: label,
  description: description,
}: WorkoutSearchModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby={label}
      aria-describedby={description}>
      <Box sx={style}>
        <Typography
          id='modal-modal-title'
          variant='h6'
          component='h2'>
          Text in a modal
        </Typography>
        <Typography
          id='modal-modal-description'
          sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
};

export default WorkoutSearchModal;
