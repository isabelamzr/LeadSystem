import React from 'react';
import { Button as MuiButton, useTheme } from '@mui/material';
import { tokens } from '../../theme';

// Botão principal (laranja)
export const PrimaryButton = ({ children, ...props }) => {
  const theme = useTheme();
  
  return (
    <MuiButton
      variant="contained"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
        textTransform: 'none',
        fontWeight: 'bold',
        padding: '8px 16px',
        ...props.sx
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

// Botão secundário (outline)
export const SecondaryButton = ({ children, ...props }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <MuiButton
      variant="outlined"
      sx={{
        borderColor: theme.palette.mode === 'dark' ? colors.grey[400] : colors.grey[300],
        color: theme.palette.text.primary,
        '&:hover': {
          borderColor: theme.palette.mode === 'dark' ? colors.grey[300] : colors.grey[400],
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
        textTransform: 'none',
        fontWeight: 'medium',
        padding: '8px 16px',
        ...props.sx
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};