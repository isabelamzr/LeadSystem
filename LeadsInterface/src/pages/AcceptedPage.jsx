// src/pages/AcceptedPage.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import AcceptedLeadCard from '../components/molecules/AcceptedLeadCard';
import { getAcceptedLeads } from '../services/LeadService';


const AcceptedPage = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch leads aceitos:
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        setLoading(true);
        const data = await getAcceptedLeads();
        setLeads(data);
      } catch (error) {
        console.error('Error fetching accepted leads:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  // Loading spinner enquanto busca os dados e mensagem de lead não encontrado:
  return (
    <Box p={3}>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="300px">
          <CircularProgress />
        </Box>
      ) : leads.length > 0 ? (
        leads.map((lead) => (
          <AcceptedLeadCard key={lead.id} lead={lead} />
        ))
      ) : (
        <Typography variant="h5" textAlign="center" mt={4}>
          No accepted leads available
        </Typography>
      )}
    </Box>
  );
};

export default AcceptedPage;