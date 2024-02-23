# Currency Converter

Este projeto foi criado com [Angular CLI](https://github.com/angular/angular-cli) usando a versão 17.0.5 atendendo a demanda de requisitos de um desafio técnico com o principal objetivo:

***Usando a API `https://docs.awesomeapi.com.br/api-de-moedas` deve ser possível mostrar em tela a quantia equivalente de uma unidade de cada moeda em Real Brasileiro.***

## Executando o Projeto em Ambiente de Desenvolvimento

>### Executando sem o Docker
- No terminal da máquina local execute o comando `node --version` e verifique se possui o [NODE](https://nodejs.org/). Este projeto deve funcionar com o node em sua versão 18.x.x ou superior. Caso ainda não possua o NODE instalado ou na versão recomendada, acesse `https://github.com/nvm-sh/nvm` para obter instruções de como instalar/configurar o NODE em sua máquina local;
- Ainda no terminal, acesse o diretório principal do projeto e execute `yarn` para instalar todos os pacotes de dependência necessários para que o Angular funcione;
- Depois de todos os pacotes terem sido instalados poderá executar `yarn start` para acessar o porjeto através da URL `http://localhost:4200` usando o seu navegador de preferência.

>### Executando com o Docker
- Com o Docker já instalado e configurado na máquina local, acesse o diretório principal do projeto através do terminal e execute `docker compose build` para montar a imagem. Em seguida execute `docker compose up -d`;
- Em seguida, quando o container estiver em execução, poderá acessar o projeto através da URL `http://localhost:4200` usando o seu navegador de preferência.

