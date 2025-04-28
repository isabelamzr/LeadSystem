## Tecnologias Utilizadas:

- React 19.1.0
- React Router 6.20.1
- Material UI 7.0.2
- Context API
- CSS personalizado
- Fetch API

## Arquitetura aplicada:

- Design Atômico para organização de componentes de interface:

atoms/ → Componentes básicos e reutilizáveis
molecules/ → Combinações de átomos formando componentes mais complexos 
organisms/ → Componentes maiores que combinam moléculas

- Arquitetura em Camadas:

global/ → Componentes globais da aplicação 
pages/ → Páginas específicas que consomem componentes e serviços 
services/ → Funções para comunicação com a API 
theme/ → Configuração de tema e estilos globais da aplicação

## Design:

- Theme System → Sistema de tokens para cores e tipografia
- Context API para gerenciamento de estado global (tema claro/escuro)
