import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme/index';

const PriceInfo = ({ price }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box display="flex" alignItems="center" gap={0.5}>
      <Typography 
        variant="body2" 
        fontWeight="600" 
        color={colors.grey[100]}
        fontSize="14px"
      >
        ${Number(price).toFixed(2)}
      </Typography>
      <Typography 
        variant="body2" 
        color={colors.grey[300]}
        fontSize="14px"
      >
        Lead Invitation
      </Typography>
    </Box>
  );
};

export default PriceInfo;