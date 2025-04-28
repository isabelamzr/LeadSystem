from sqlalchemy import Column, Integer, String, Float, DateTime
from database import Base
from datetime import datetime

# Classe que representa a tabela do banco LeadManagement
class Lead(Base):
    __tablename__ = "Leads"
    JobId = Column(Integer, primary_key=True, index=True)
    FirstName = Column(String)
    LastName = Column(String, nullable=True)
    PhoneNumber = Column(String, nullable=True)
    Email = Column(String, nullable=True)
    Suburb = Column(String)
    Category = Column(String)
    Description = Column(String)
    Price = Column(Float)
    Status = Column(String)
    CreatedAt = Column(DateTime, default=datetime.now)