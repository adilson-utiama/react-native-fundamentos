const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//Exemplo simples de funcionamento de um Middleware 
app.use(meuJson())
function meuJson() {
    return (req, res, next) => {
        console.log('Antes de tudo: Meu MiddleWare.....')
        next()
    }
}

//Utilizando o Body-Parser
app.use(bodyParser.json())

//http://localhost:3000/corpo
//corpo
/* {
	"nome": "Wilson",
	"sobrenome": "Silva"
} */
//Result -> Data recebido pelo corpo da requisicao -> {"nome":"Wilson","sobrenome":"Silva"}
app.post('/corpo', (req, res, next) => {
    let data = JSON.stringify(req.body)
    res.status(200).send('Data recebido pelo corpo da requisicao -> ' + data)
    next()
})

app.get('/', (req, res, next) => {
    console.log('Redirecionando para outra requisicao....')
    //Redireciona para a proxima chamada com '/'
    next()
})

app.get('/', (req, res) => {
    res.status(200).send('Requisicao Concluida...')
})

//http://localhost:3000/parametro/umValor
//Result = Parametro recebido -> umValor
app.get('/parametro/:valor', (req, res) => {
    //Capturando parametros
    let parametro = req.params.valor
    res.status(200).send('Parametro recebido -> ' + parametro)
})

http://localhost:3000/query?nome=wilson
//Result = Valor recebido na Query -> wilson
app.get('/query', (req, res) => {
    //Capturando valores pela query
    let nome = req.query.nome
    res.status(200).send('Valor recebido na Query -> ' + nome)
})

app.listen(3000, () => {
    console.log('Backend executando...')
})