const express = require("express")
const rotaLivros = require("./rotas/livros")

const app = express()

app.use('/livros', rotaLivros)

const port = 8000

app.get('/', (req, res) => {
    res.send("Ola mundo! Seja bem vindo!")
})

app.listen(port, () => {
    console.log(`conectado na porta ${port}`)
})