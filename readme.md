Projeto: node-Sigtrans

utilize o comando "Yarn run" para iniciar o projeto.
acesse pelo endereço //localhost:3001 para realizar a função migration com node.
docker usei mais como teste, não testei o suficiente mas deixei no projeto, o banco pode ser testado usando o comando "yarn typeorm migration:run -d src/db/dataSource.ts".
Os serviços disponibilizados na API são os controllers, as entities, os services e a database.

tive um pequeno problema com o getRepository já que o typeORM atualizou recentemente sua documentação.

Obs: Fiz um outro código do zero mais organizado e com mais divisões, se quiserem posso enviar também.