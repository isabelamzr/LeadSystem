// URL base da API
const API_URL = "http://localhost:7001/api/leads";

// Função para obter leads convidados
export const getInvitedLeads = async () => {
  try {
    const response = await fetch(`${API_URL}/invited`);
    if (!response.ok) {
      throw new Error('Erro ao buscar leads convidados');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar leads convidados:', error);
    throw error;
  }
};

// Função para obter leads aceitos
export const getAcceptedLeads = async () => {
  try {
    const response = await fetch(`${API_URL}/accepted`);
    if (!response.ok) {
      throw new Error('Erro ao buscar leads aceitos');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar leads aceitos:', error);
    throw error;
  }
};

// Função para aceitar um lead
export const acceptLead = async (leadId) => {
  try {
    const response = await fetch(`${API_URL}/${leadId}/accept`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Erro ao aceitar lead');
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Erro ao aceitar lead ${leadId}:`, error);
    throw error;
  }
};

// Função para recusar um lead
export const declineLead = async (leadId) => {
  try {
    const response = await fetch(`${API_URL}/${leadId}/decline`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Erro ao recusar lead');
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Erro ao recusar lead ${leadId}:`, error);
    throw error;
  }
};