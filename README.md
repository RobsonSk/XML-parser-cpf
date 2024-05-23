# XML Parser CPF

## Descrição

Este programa em Node.js lê um arquivo CSV contendo CPFs, faz o parsing de arquivos XML em uma pasta especificada e, com base na presença dos CPFs no arquivo CSV, copia os arquivos XML para diferentes pastas. Se o CPF do XML estiver presente no CSV, o arquivo é copiado para uma pasta. Se o CPF do XML não estiver presente no CSV, o arquivo é copiado para outra pasta.

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalação

Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/xml-parser-cpf.git
   cd xml-parser-cpf
   npm install
   ```

Crie um arquivo .env na raiz do projeto com o seguinte conteúdo substituindo pelo caminho das pastas que utilizará:
- PASTA_XML=caminho/para/pasta/xml
- PASTA_CSV=caminho/para/arquivo/csv.csv
- CONSULTORAS_FOLDER=caminho/para/pasta/consultoras/
- NORMAIS_FOLDER=caminho/para/pasta/normais/

## Utilização
Para iniciar o programa, execute o seguinte comando:
```sh
npm start
``` 

## Estrutura do Projeto
.
├── .env
├── app.js
├── package.json
└── README.md

## Dependências
- **csv-parser: Biblioteca para fazer parsing de arquivos CSV.**
- **dotenv: Biblioteca para carregar variáveis de ambiente de um arquivo .env.**
- **xml2js: Biblioteca para fazer parsing de arquivos XML.**

## Funcionamento
- O programa lê o arquivo CSV especificado e armazena os CPFs em memória.
- Lê todos os arquivos XML da pasta especificada.
- Para cada arquivo XML, faz o parsing e verifica o CPF.
- Se o CPF do XML estiver presente no CSV, copia o arquivo para a pasta consultoras.
- Se o CPF do XML não estiver presente no CSV, copia o arquivo para a pasta normais.
- Remove o arquivo original após a cópia.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENCE) para mais detalhes.

## Contato

Para qualquer pergunta ou sugestão, entre em contato com [Robson Scartezini](mailto:robsonshk@gmail.com).
