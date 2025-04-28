from sqlalchemy.orm import Session
from domain.lead import Lead
from fastapi import HTTPException

# Função para recusar um lead
def decline_lead(db: Session, lead_id: int):
    lead = db.query(Lead).filter(Lead.JobId == lead_id).first()

    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")

    lead.Status = "Declined"
    db.commit()

    return {"message": "Lead declined"}
