from sqlalchemy.orm import Session
from domain.lead import Lead
from datetime import datetime

# Lista leads aceitos 
def get_accepted_leads(db: Session):
    leads = db.query(Lead).filter(Lead.Status == "Accepted").all()
    return [
        {
            "id": lead.JobId,
            "firstName": lead.FirstName,
            "lastName": lead.LastName or "",
            "phoneNumber": lead.PhoneNumber,
            "email": lead.Email,
            "createdAt": lead.CreatedAt if hasattr(lead, 'CreatedAt') else datetime.now(),
            "suburb": lead.Suburb,
            "category": lead.Category,
            "description": lead.Description,
            "price": lead.Price
        } for lead in leads
    ]