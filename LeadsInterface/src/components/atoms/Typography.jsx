import React from 'react';
import { Typography as MuiTypography, useTheme } from '@mui/material';


// Título principal
export const Title = ({ children, ...props }) => {
  const theme = useTheme();
  
  return (
    <MuiTypography
      variant="h4"
      color={theme.palette.text.primary}
      {...props}
    >
      {children}
    </MuiTypography>
  );
};

// Subtítulo
export const Subtitle = ({ children, ...props }) => {
  const theme = useTheme();
  
  return (
    <MuiTypography
      variant="body1"
      color={theme.palette.text.secondary}
      {...props}
    >
      {children}
    </MuiTypography>
  );
};

// Texto normal
export const BodyText = ({ children, ...props }) => {
  const theme = useTheme();
  
  return (
    <MuiTypography
      variant="body2"
      color={theme.palette.text.primary}
      {...props}
    >
      {children}
    </MuiTypography>
  );
};