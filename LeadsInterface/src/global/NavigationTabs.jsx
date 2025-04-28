import React from 'react';
import { Box, Tabs, Tab, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { tokens } from '../theme/index';

const NavigationTabs = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleChange = (event, newValue) => {
    navigate(newValue);
  };

  return (
    <Box sx={{ 
      width: '100%', 
      backgroundColor: theme.palette.background.paper,
      borderBottom: `1px solid ${theme.palette.mode === 'dark' ? colors.grey[700] : colors.grey[600]}`
    }}>
      
      <Tabs
        value={location.pathname}
        onChange={handleChange}
        aria-label="lead management tabs"
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: colors.accent[500],
            height: 3
          },
          '& .MuiTab-root': {
            fontSize: '15px',
            fontWeight: 600,
            color: theme.palette.text.secondary,
            minWidth: '50%',
            textTransform: 'none',
            py: 2,
            '&.Mui-selected': {
              color: theme.palette.text.primary,
              fontWeight: 600
            }
          }
        }}
      >
        <Tab label="Invited" value="/invited" />
        <Tab label="Accepted" value="/accepted" />
      </Tabs>
    </Box>
  );
};

export default NavigationTabs;