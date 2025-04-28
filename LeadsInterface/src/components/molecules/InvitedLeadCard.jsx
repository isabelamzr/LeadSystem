import React from 'react';
import { Box, Typography, Card, CardContent, Button, useTheme } from '@mui/material';
import { tokens } from '../../theme/index';
import AvatarInitial from '../atoms/AvatarInitial';
import InfoLine from '../atoms/InfoLine';
import PriceInfo from '../atoms/PriceInfo';

const InvitedLeadCard = ({ lead, onAccept, onDecline }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  return (
    <Card 
      sx={{ 
        mb: 2, 
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
        borderRadius: 1,
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.mode === 'dark' ? colors.grey[700] : colors.grey[600]}`
      }}
    >

      <CardContent sx={{ p: 2 }}>
        {/* Cabeçalho com name/date */}
        <Box mb={2}>
          <AvatarInitial 
            firstName={lead.firstName}
            lastName={lead.lastName}
            createdAt={lead.createdAt}
          />
        </Box>


        {/* ID, location, category */}
        <Box mb={2} pl={0.5}>
          <InfoLine 
            suburb={lead.suburb}
            postcode={lead.postcode}
            category={lead.category}
            jobId={lead.id}
          />


          {/* Description */}
          {lead.description && (
            <Box display="flex" alignItems="flex-start" mt={2} mb={3} pl={0.5}>
              <Typography variant="body2" color={colors.grey[300]} fontSize="14px" sx={{ flex: 1 }}>
                {lead.description}
              </Typography>
            </Box>
          )}


          {/* Separator line */}
          <Box sx={{ borderBottom: `1px solid ${colors.grey[700]}`, mb: 1 }}></Box>
        </Box>


        {/* Action buttons */}

        <Box display="flex" alignItems="center">
          <Box>
            <Button
              variant="contained"
              onClick={() => onAccept(lead.id)}
              sx={{
                backgroundColor: colors.accent[500],
                fontSize: '14px',
                fontWeight: 600,
                textTransform: 'none',
                minWidth: '80px',
                py: 0.7,
                color: colors.grey[900],
                '&:hover': { backgroundColor: colors.accent[500] },
                mr: 1
              }}
            >
              Accept
            </Button>
            
            <Button
              variant="contained"
              onClick={() => onDecline(lead.id)}
              sx={{
                backgroundColor: theme.palette.mode === 'dark' ? colors.grey[700] : colors.grey[700],
                color: colors.grey[200],
                '&:hover': { backgroundColor: colors.grey[700] },
                fontSize: '14px',
                fontWeight: 600,
                textTransform: 'none',
                minWidth: '80px',
                py: 0.7
              }}
            >
              Decline
            </Button>
          </Box>
          
          
          {/* Price Info */}

          <Box sx={{ ml: 2 }}>
            <PriceInfo price={lead.price} />
          </Box>

        </Box>
      </CardContent>
    </Card>
  );
};

export default InvitedLeadCard;