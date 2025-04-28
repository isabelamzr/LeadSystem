import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import InvitedLeadCard from '../components/molecules/InvitedLeadCard';
import { getInvitedLeads, acceptLead, declineLead } from '../services/LeadService';
import { Snackbar, Alert } from '@mui/material';

const InvitedPage = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  // Fetch leads solicitados
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        setLoading(true);
        const data = await getInvitedLeads();
        setLeads(data);
      } catch (error) {
        console.error('Error fetching leads:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchLeads();
  }, []);

  // Lida com a aceitação do lead, com mensagens de sucesso e erro:
  const handleAccept = async (leadId) => {
    try {
      await acceptLead(leadId);
      setLeads(leads.filter(lead => lead.id !== leadId));
      
      setSnackbarMessage('Lead aceito com sucesso!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
    } catch (error) {
      console.error(`Error accepting lead ${leadId}:`, error);
      setSnackbarMessage('Erro ao aceitar lead.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleDecline = async (leadId) => {
    try {
      await declineLead(leadId);
      setLeads(leads.filter(lead => lead.id !== leadId));

      setSnackbarMessage('Lead recusado com sucesso!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
    } catch (error) {
      console.error(`Error declining lead ${leadId}:`, error);
      setSnackbarMessage('Erro ao recusar lead.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };
    
  return (
    <Box p={3}>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="300px">
          <CircularProgress />
        </Box>
      ) : leads.length > 0 ? (
        leads.map((lead) => (
          <InvitedLeadCard
            key={lead.id}
            lead={lead}
            onAccept={handleAccept}
            onDecline={handleDecline}
          />
        ))
      ) : (
        <Typography variant="h5" textAlign="center" mt={4}>
          No invited leads available
        </Typography>
      )}
      
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default InvitedPage;