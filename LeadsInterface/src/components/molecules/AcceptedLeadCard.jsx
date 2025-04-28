import React from 'react';
import { Box, Typography, Card, CardContent, useTheme } from '@mui/material';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { tokens } from '../../theme/index';
import AvatarInitial from '../atoms/AvatarInitial';
import InfoLine from '../atoms/InfoLine'; 


const AcceptedLeadCard = ({ lead }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  return (
    <Card sx={{ mb: 2, boxShadow: '0px 1px 3px rgba(0,0,0,0.1)', borderRadius: 1, backgroundColor: theme.palette.background.paper, border: `1px solid ${colors.grey[700]}` }}>
      <CardContent sx={{ p: 2 }}>
        {/* Header */}
        <Box mb={2}>
          <AvatarInitial firstName={lead.firstName} lastName={lead.lastName} createdAt={lead.createdAt} />
        </Box>


        {/* InfoLine com PriceInfo */}
        <Box mb={2} pl={0.5}>
          <InfoLine
            suburb={lead.suburb}
            postcode={lead.postcode}
            category={lead.category}
            jobId={lead.id}
            showPrice={true}          
            price={lead.price}        
          />


          {/* Descrição */}
          {lead.description && (
            <Box display="flex" alignItems="flex-start" mt={2} mb={3} pl={0.5}>
              <Typography variant="body2" color={colors.grey[300]} fontSize="14px" sx={{ flex: 1 }}>
                {lead.description}
              </Typography>
            </Box>
          )}

          {/* Linha de separação */}
          <Box sx={{ borderBottom: `1px solid ${colors.grey[700]}`, mb: 1 }} />
        </Box>


        {/* Contato */}
        <Box>
          {lead.phoneNumber && (
            <Box display="flex" alignItems="center" mb={1} pl={0.5}>
              <PhoneOutlinedIcon fontSize="small" sx={{ mr: 1.5, color: theme.palette.text.secondary }} />
              <Typography variant="body2" color={theme.palette.text.primary} fontSize="14px">
                {lead.phoneNumber}
              </Typography>
            </Box>
          )}
          {lead.email && (
            <Box display="flex" alignItems="center" mb={1} pl={0.5}>
              <EmailOutlinedIcon fontSize="small" sx={{ mr: 1.5, color: theme.palette.text.secondary }} />
              <Typography variant="body2" color={theme.palette.text.primary} fontSize="14px">
                {lead.email}
              </Typography>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default AcceptedLeadCard;