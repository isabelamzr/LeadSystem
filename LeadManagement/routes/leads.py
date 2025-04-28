from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from application.commands.accept_lead import accept_lead as accept_lead_command
from application.commands.decline_lead import decline_lead as decline_lead_command
from application.queries.get_invited_leads import get_invited_leads
from application.queries.get_accepted_leads import get_accepted_leads

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# API Endpoints

@router.get("/api/leads/invited")
def api_get_invited_leads(db: Session = Depends(get_db)):
    return get_invited_leads(db)


@router.get("/api/leads/accepted")
def api_get_accepted_leads(db: Session = Depends(get_db)):
    return get_accepted_leads(db)


@router.post("/api/leads/{lead_id}/accept")
def api_accept_lead(lead_id: int, db: Session = Depends(get_db)):
    return accept_lead_command(db, lead_id)


@router.post("/api/leads/{lead_id}/decline")
def api_decline_lead(lead_id: int, db: Session = Depends(get_db)):
    return decline_lead_command(db, lead_id)