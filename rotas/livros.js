const { Router } = require("express")
const { getLivros } = require("../controladores/livros")

const router = Router()

router.get('/', getLivros())

router.post('/', (req, res) => {
    res.send('Esse é um POST')
})

router.patch('/', (req, res) => {
    res.send('Esse é um PATH')
})

router.delete('/', (req, res) => {
    res.send('Esse é um DELETE')
})

module.exports = router