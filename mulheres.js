const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Jessi',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D35AQFdS3dWH-5ZZQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1719347653863?e=1727467200&v=beta&t=8z1nszt2vLBQ_JbPvS_H11HgYNRyzQEXo-hahsSWNwg',
        minibio: 'Desenvolvedora JavaScript'
    },

    {
        Nome: 'Iana Chan',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D35AQFdS3dWH-5ZZQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1719347653863?e=1727467200&v=beta&t=8z1nszt2vLBQ_JbPvS_H11HgYNRyzQEXo-hahsSWNwg',
        minibio: 'Fundadora do programaria'
    },

    {
        nome: 'Nina da hora',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D35AQFdS3dWH-5ZZQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1719347653863?e=1727467200&v=beta&t=8z1nszt2vLBQ_JbPvS_H11HgYNRyzQEXo-hahsSWNwg',
        minibio: 'Hacker antiracista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
     
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)