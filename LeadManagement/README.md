## Tecnologias Utilizadas:

- Python 3.13
- FastAPI
- SQLAlchemy
- SQL Server
- Uvicorn
- dotenv

## Arquitetura Aplicada:

- **FastAPI** para construção da API RESTful.
- **SQLAlchemy** como ORM para comunicação com o banco de dados SQL Server.
- **Separação de Queries e Commands** (CQRS) para melhor organização e clareza no código.
- **Organização em camadas**, inspirada nos princípios do DDD (Domain-Driven Design):
- domain/ → Definição das entidades de domínio (Lead).
- application/ → Divisão entre Commands e Queries (aplicação de CQRS de forma simples e prática).
- infrastructure/ → Serviços externos, como envio de e-mails simulados.
