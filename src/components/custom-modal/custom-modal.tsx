import type { ModalProps } from '@mui/material';

import { Box, Modal, IconButton } from '@mui/material';

import { Iconify } from '../iconify';

type Props = ModalProps;
export default function CustomModal({ children, sx, onClose, ...rest }: Props) {
  return (
    <Modal disableAutoFocus onClose={onClose} {...rest}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: 'md',
          width: '90%',
          bgcolor: 'transparent',

          ...sx,
        }}
      >
        <IconButton
          sx={{
            ml: 'auto',
            mr: 0,
            display: 'flex',
            '&:hover': {
              color: 'white',
            },
          }}
          onClick={onClose}
        >
          <Iconify icon="rivet-icons:close" />
        </IconButton>
        <Box
          sx={{
            bgcolor: 'background.paper',
          }}
        >
          {children}
        </Box>
      </Box>
    </Modal>
  );
}
