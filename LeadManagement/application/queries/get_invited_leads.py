from sqlalchemy.orm import Session
from domain.lead import Lead
from datetime import datetime

# Lista pedidos de leads
def get_invited_leads(db: Session):
    leads = db.query(Lead).filter(Lead.Status == "Invited").all()
    return [
        {
            "id": lead.JobId,
            "firstName": lead.FirstName,
            "createdAt": lead.CreatedAt if hasattr(lead, 'CreatedAt') else datetime.now(),
            "suburb": lead.Suburb,
            "category": lead.Category,
            "description": lead.Description,
            "price": lead.Price
        } for lead in leads
    ]
