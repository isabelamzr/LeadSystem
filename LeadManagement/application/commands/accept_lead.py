from sqlalchemy.orm import Session
from domain.lead import Lead
from infrastructure.email_service import send_email_to_sales
from fastapi import HTTPException

# Função para aceitar um lead
def accept_lead(db: Session, lead_id: int):

    # Verifica se o lead existe pelo id
    lead = db.query(Lead).filter(Lead.JobId == lead_id).first()

    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")

     # Aplica desconto de 10% para leads acima de $500
    if lead.Price > 500:
        lead.Price = lead.Price * 0.9

    # Atualiza o status do lead 
    lead.Status = "Accepted"
    db.commit()

    # Simulação do envio de e-mail
    lead_info = {
        "job_id": lead.JobId,
        "name": f"{lead.FirstName} {lead.LastName or ''}".strip(),
        "category": lead.Category,
        "price": lead.Price,
        "description": lead.Description
    }

    email_file = send_email_to_sales(lead_info)

    return {"message": f"Lead accepted. Email notification saved to {email_file}"}
