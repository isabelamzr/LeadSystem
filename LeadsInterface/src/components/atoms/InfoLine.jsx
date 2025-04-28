import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { tokens } from '../../theme/index';
import PriceInfo from './PriceInfo';   

const InfoLine = ({ suburb, postcode, category, jobId, showPrice = false, price }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      gap={1}
      mb={1}
      pb={1}
      sx={{ borderBottom: `1px solid ${colors.grey[700]}` }}
    >
      
      {/* Location */}
      <Box display="flex" alignItems="center">
        <LocationOnOutlinedIcon fontSize="small" sx={{ mr: 1, color: colors.grey[300] }} />
        <Typography variant="body2" color={colors.grey[300]} fontSize="14px">
          {suburb} {postcode}
        </Typography>
      </Box>


      {/* Category */}
      <Box display="flex" alignItems="center" sx={{ ml: 2 }}>
        <WorkOutlineOutlinedIcon fontSize="small" sx={{ mr: 1, color: colors.grey[300] }} />
        <Typography variant="body2" color={colors.grey[300]} fontSize="14px">
          {category}
        </Typography>
      </Box>


      {/* Job ID */}
      <Box display="flex" alignItems="center" sx={{ ml: 2 }}>
        <Typography variant="body2" color={colors.grey[300]} fontSize="14px">
          Job ID: {jobId}
        </Typography>
      </Box>


      {/* PriceInfo ao lado, se acionado */}
      {showPrice && (
        <Box display="flex" alignItems="center" sx={{ ml: 2 }}>
          <PriceInfo price={price} />
        </Box>
      )}

    </Box>
  );
};

export default InfoLine;