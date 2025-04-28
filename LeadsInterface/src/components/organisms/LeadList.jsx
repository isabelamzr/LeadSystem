// src/components/organisms/LeadList.jsx
import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { InvitedLeadCard, AcceptedLeadCard } from '../molecules/LeadCard';

// Leads pendentes:
export const InvitedLeadList = ({ leads, loading, onAccept, onDecline }) => {
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="300px">
        <CircularProgress />
      </Box>
    );
  }

  if (!leads || leads.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="200px">
        <Typography variant="h5" color="text.secondary">
          No invited leads available
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      {leads.map(lead => (
        <InvitedLeadCard
          key={lead.id}
          lead={lead}
          onAccept={onAccept}
          onDecline={onDecline}
        />
      ))}
    </Box>
  );
};


// Leads aceitos: 
export const AcceptedLeadList = ({ leads, loading }) => {
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="300px">
        <CircularProgress />
      </Box>
    );
  }

  if (!leads || leads.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="200px">
        <Typography variant="h5" color="text.secondary">
          No accepted leads available
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      {leads.map(lead => (
        <AcceptedLeadCard key={lead.id} lead={lead} />
      ))}
    </Box>
  );
};