import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme/index';

const AvatarInitial = ({ firstName, lastName, createdAt }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box display="flex" alignItems="flex-start">
      <Box 
        bgcolor={
          firstName 
            ? firstName.charAt(0) === 'P' ? '#757de8' : 
              firstName.charAt(0) === 'C' ? colors.accent[500] : 
              firstName.charAt(0) === 'B' ? colors.accent[500] : '#757de8' 
            : '#757de8'
        }
        borderRadius="50%"
        width={36}
        height={36}
        display="flex"
        justifyContent="center"
        alignItems="center"
        mr={2}
      >
        <Typography variant="subtitle1" color="#FFFFFF" fontWeight="600">
          {firstName ? firstName.charAt(0).toUpperCase() : '?'}
        </Typography>
      </Box>
      <Box>
        <Typography 
          variant="subtitle1" 
          fontWeight="600"
          color={theme.palette.text.primary}
        >
          {firstName || 'Unknown'} {lastName || ''}
        </Typography>
        <Typography 
          variant="body2" 
          color={theme.palette.text.secondary}
          fontSize="12px"
        >
          {new Date(createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} @ {new Date(createdAt).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
        </Typography>
      </Box>
    </Box>
  );
};

export default AvatarInitial;