const express = require("express")
const router = express.Router()


const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Jessi',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D35AQFdS3dWH-5ZZQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1719347653863?e=1727467200&v=beta&t=8z1nszt2vLBQ_JbPvS_H11HgYNRyzQEXo-hahsSWNwg',
        minibio: 'Desenvolvedora em JavaScript'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)