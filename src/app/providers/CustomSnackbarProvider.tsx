'use client'

import { SnackbarProvider } from 'notistack';
import { Box } from '@mui/material';

export const CustomSnackbarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{ justifyContent: 'center', '& > div': {fontSize: '14px'} }}
      component={SnackbarProvider}
      autoHideDuration={50000}
      hideIconVariant
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      maxSnack={4}
    >
      {children}
    </Box>
  )
}