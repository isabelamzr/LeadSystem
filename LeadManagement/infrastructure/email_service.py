import os
from datetime import datetime

def send_email_to_sales(lead_info):
    """
    Simula o envio de email para vendas, criando um arquivo de texto.
    """

    # Cria diretório "emails" caso não exista
    if not os.path.exists('emails'):
        os.makedirs('emails')
    
    # Nome do arquivo (data/hora atuais)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"emails/lead_accepted_{timestamp}.txt"
    
    # Conteúdo do email
    email_content = f"""
    Para: vendas@test.com
    Assunto: Novo Lead Aceito - ID: {lead_info['job_id']}
    
    Um novo lead foi aceito no sistema:
    
    Job ID: {lead_info['job_id']}
    Nome: {lead_info['name']}
    Categoria: {lead_info['category']}
    Preço: ${lead_info['price']:.2f}
    Descrição: {lead_info['description']}
    
    Por favor, entre em contato com o cliente o mais breve possível.
    
    Atenciosamente,
    Sistema de Gerenciamento de Leads
    """

    with open(filename, 'w') as file:
        file.write(email_content)
    
    return filename