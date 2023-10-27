# Aula Autenticação com JWT - Programa Intercâmbio iFood

Este é um projeto prático desenvolvido como parte de uma aula sobre autenticação com JWT. O projeto segue a arquitetura em camadas e tem como objetivo criar uma API REST para autenticar usuários e realizar operações CRUD (Create, Read, Update, Delete) em uma tabela de usuários no banco de dados 'db_aula_jwt'.

## Sobre o programa Intercâmbio iFood

Programa realizado pelo Time de Comunidade junto com o Time de Experiência do Estudante B2B da Cubos Academy com a finalidade de estabelecer conexões entre as turmas do iFood e reforçar o aprendizado ensinado nas aulas. Os estudantes interessados em reforçar o ensino de algum tema do curso se tornam guias de grupos de até 10 participantes no período de segunda à quarta das 18h às 19h.  

## Arquitetura em Camadas

O projeto segue a arquitetura em camadas para manter o código organizado e separar as responsabilidades. Aqui está uma visão geral das camadas:

- **Controllers (Controladores)**: Responsáveis por receber as informações de uma requisição HTTP e retornar uma resposta. Controlam o fluxo da aplicação e gerenciam a autenticação e operações do usuário.

- **Routes (Rotas)**: Gerenciam as rotas da API, mapeando as URLs para as funções do controlador correspondentes.

- **Services (Serviços)**: Lidam com a lógica de negócios da aplicação, aplicando regras e processamento de dados. Aqui, a autenticação e operações de usuário são tratadas.

- **Repository (Repositórios)**: Responsáveis por fazer as requisições ao banco de dados 'db_aula_jwt' para persistência e recuperação de dados do usuário.

- **Configs (Configurações)**: Lidam com as configurações do banco de dados e outras configurações necessárias da aplicação.

- **Middlewares (Intermediários)**: Realizam validações e verificações intermediárias para garantir a segurança e a integridade dos dados, incluindo a verificação de tokens JWT.

## Funcionalidades Principais

O projeto oferece as seguintes funcionalidades:

1. **Cadastro de Usuário**: Os usuários podem se cadastrar fornecendo informações como nome, email e senha.

2. **Login**: Usuários registrados podem fazer login com suas credenciais para obter um token JWT válido.

3. **Editar Informações do Usuário Logado**: Usuários autenticados podem atualizar suas informações pessoais, como nome, email e senha.

4. **Listar Informações do Usuário Logado**: Os usuários podem recuperar informações detalhadas sobre si mesmos.


## Dependências

Este projeto utiliza as seguintes tecnologias:

- **Express**: Framework web para Node.js que simplifica o desenvolvimento de aplicativos RESTful.

- **dotenv**: Um módulo que carrega variáveis de ambiente a partir de um arquivo `.env`, permitindo a configuração segura de informações sensíveis.

- **pg (node-postgres)**: Um driver Node.js para PostgreSQL, usado para se conectar e interagir com o banco de dados PostgreSQL.

- **bcrypt**: Uma biblioteca para hash de senhas, usada para proteger as senhas dos usuários no banco de dados.

- **jsonwebtoken**: Uma biblioteca para criar e verificar tokens JSON Web (JWT), usada para autenticar e autorizar os usuários.

Certifique-se de instalar todas essas dependências utilizando o comando:

```bash
npm install express dotenv pg bcrypt jsonwebtoken
```

```bash
npm install nodemon -D
```

## Configuração do Banco de Dados

Antes de executar o projeto, é necessário configurar o banco de dados. Certifique-se de criar o banco de dados 'db_aula_jwt' e configurar as informações de conexão no arquivo `.env`.

## Instalação e Execução

Siga estas etapas para executar o projeto em seu ambiente local:

1. Clone este repositório: `git clone https://github.com/seu-usuario/nome-do-repositorio.git`
2. Instale as dependências: `npm install`
3. Configure as variáveis de ambiente, incluindo a chave secreta JWT e informações do banco de dados no arquivo `.env`.
4. Execute o aplicativo: `npm run dev`
5. Acesse a API em http://localhost:4000

## Endpoints da API

Aqui estão alguns dos principais endpoints da API:

- `POST /usuario`: Cadastro de usuários.
- `POST /login`: Autenticação e obtenção do token JWT.
- `PUT /usuario`: Atualização das informações do usuário logado.
- `GET /usuario`: Obtenção das informações do usuário logado.


## Material de Estudos
- <a href="https://mf-programacao.notion.site/mf-programacao/Guia-Abrangente-de-Autentica-o-com-JWT-em-Node-js-Aula-a7a4f97e5f5c4319a56dfe972c7002d3">Link</a>

## Contribuição

Sinta-se à vontade para contribuir para o projeto, fazer sugestões ou relatar problemas. Aceitamos pull requests!

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](https://github.com/mfcastilho/aula-api-rest/blob/master/LICENSE) para obter detalhes.

## Contato

Para dúvidas ou mais informações, entre em contato com a equipe de desenvolvimento:

- Nome do Desenvolvedor: Mario Frederico Castilho
- Email: fredericocastilho@hotmail.com

Obrigado por usar o projeto Aula de API REST!


