
![NPM](https://img.shields.io/npm/l/react)

# api-musica
Esta API é utilizada para gerenciar um sistema de músicas, permitindo operações de CRUD (criar, ler, atualizar e deletar) sobre músicas.

## Endpoints
### - GET /musicas
Esse endpoint é responsável por retornar a listagem de todas as músicas cadastrados no banco de dados.

#### Parâmetros:
Nenhum

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, você vai receber a listagem de todas as músicas.

Exemplo de resposta:

```
{
    "musicas": [
        {
            "artist": "Post Malone",
            "album": "Album Post Malone",
            "year": 2022,
            "genre": "trap",
            "duration": 200,
            "track": [
                {
                    "title": "Sunflower",
                    "duration": 200
                }
            ]
        }
    ]
}

```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor. Motivos podem incluir falhas na comunicação com o banco de dados.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```

### - POST /game
Esse endpoint é responsável por cadastrar um novo jogo no banco de dados.

#### Parâmetros:
artist: nome do artista<br>
album: nome do album <br>
year: Ano de lançamento do jogo.<br>
genre: Gênero musical do album<br>
duration: Duração da música<br>
track: Descrições adicionais sobre a música.

Exemplo de requisição:

```
{
	"artist": "Post Malone",
	"album": "Album Post Malone",
	"year": 2022,
	"genre": "trap",
	"duration": 200, 
	"track": [
		{
			"title": "Sunflower",
			"duration": 200
		}
	]
}

```

#### Respostas:
##### Criado! 201
Caso essa resposta aconteça, a nova música foi criada com sucesso.

Exemplo de resposta: Nenhum conteúdo retornado.

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```


### - DELETE /musicas/
Esse endpoint é responsável por deletar uma música específica pelo seu ID.

#### Parâmetros:
id: ID da música a ser deletado.

#### Respostas:
##### Sem Conteúdo! 204
Caso essa resposta aconteça, a música foi deletada com sucesso e não há conteúdo para retornar ao cliente.

Exemplo de resposta: Deletada com sucesso.

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

Exemplo de resposta:

```
{
    "error": "ID inválido!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```

### - PUT /musicas/
Esse endpoint é responsável por atualizar as informações de uma música específica pelo seu ID.

#### Parâmetros:
id: ID do jogo a ser atualizado.<br>
artist: nome do artista<br>
album: nome do album <br>
year: Ano de lançamento do jogo.<br>
genre: Gênero musical do album<br>
duration: Duração da música<br>
track: Descrições adicionais sobre a música.


Exemplo de requisição:

```
{
	"artist": "Post Malone",
	"album": "Album Post Malone",
	"year": 2022,
	"genre": "trap",
	"duration": 200, 
	"track":[
		{
			"title": "suns flower",
			"duration": 200
		}
	]
}
```

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, as informações da música foram atualizadas com sucesso.

Exemplo de resposta:

```
{
    "musicas": [
        {
            "artist": "Post Malone",
            "album": "Album Post Malone",
            "year": 2022,
            "genre": "trap",
            "duration": 200,
            "track": [
                {
                    "title": "Sunflower",
                    "duration": 200
                }
            ]
        }
    ]
}

```

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido ou a requisição contém dados malformados.

Exemplo de resposta:

```
{
    "error": "ID inválido ou dados malformados!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```

### - GET /musicas/
Esse endpoint é responsável por retornar as informações de uma música específica pelo seu ID.

#### Parâmetros:
id: ID da música a ser consultada.

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, você vai receber as informações da música solicitada.

Exemplo de resposta:

```
{
    "musicas": [
        {
            "artist": "Post Malone",
            "album": "Album Post Malone",
            "year": 2022,
            "genre": "trap",
            "duration": 200,
            "track": [
                {
                    "title": "Sunflower",
                    "duration": 200
                }
            ]
        }
    ]
}

```

##### Não Encontrado! 404
Caso essa resposta aconteça, significa que a música com a ID fornecida não foi encontrado.

Exemplo de resposta:

```
{
    "error": "Música não encontrada!"
}
```

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

Exemplo de resposta:

```
{
    "error": "ID inválido!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```
