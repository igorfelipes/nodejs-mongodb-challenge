# Node.js MongoDB API

## Autor

- Igor Sales
- Email: igorsales.fs@gmail.com

## Descrição

Este projeto é uma API em Node.js que utiliza o MongoDB como banco de dados. Ele fornece uma série de endpoints para interagir com dados relacionados a carros e leilões.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados:

- Node.js (versão v16.16.0)
- MongoDB
- Docker (opcional)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nodejs-mongodb-api.git
	 ```
2. Acesse o diretório do projeto: 
	``` 
	cd nodejs-mongodb-api
	```
3. Instale as dependências: 
	``` 
	npm install
	```
4. Configure as variáveis de ambiente criando um arquivo .env na raiz do projeto e definindo as seguintes variáveis:

	```
	PORT=3000
	JWT_SECRET=suachaveprivada
	JWT_EXPIRES_IN=1h
	```

## Execução com Docker Compose (Opcional)

Se você tiver o Docker instalado e quiser usar os contêineres Docker para MongoDB e MongoDB Express, siga estas etapas:

1. Execute o Docker Compose para iniciar os contêineres:

	```
	docker-compose up -d
	```

Isso iniciará os contêineres do MongoDB e MongoDB Express com as configurações especificadas no arquivo docker-compose.yml.

2. Certifique-se de que os contêineres estão em execução:
 
	```
	docker ps
	```

## Execução

1. Inicie o servidor de desenvolvimento:

	```
	npm run start:dev
	```

O servidor será iniciado em http://localhost:3000.

Você pode acessar a documentação da API no Swagger em http://localhost:3000/swagger

## Licença
Este projeto está licenciado sob a Licença MIT.