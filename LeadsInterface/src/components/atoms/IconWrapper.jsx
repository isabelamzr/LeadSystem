import React from 'react';
import { Box, useTheme } from '@mui/material';

const IconWrapper = ({ children, ...props }) => {
  const theme = useTheme();
  
  return (
    <Box
      display="flex"
      alignItems="center"
      color={theme.palette.text.secondary}
      mr={1}
      {...props}
    >
      {children}
    </Box>
  );
};

export default IconWrapper;