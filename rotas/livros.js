const { Router } = require("express")
const { getLivros } = require("../controladores/livros.js")

const router = Router()

router.get('/', (req, res) => {
    getLivros(req, res)
  })

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