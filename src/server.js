const app = require('./app');
// ESTABELECENDO A PORTA QUE P SERVIDOR IRÁ SER EXECUTADO
const { port } = require('./config/dotenvConfig')
// IMPORTAÇÕES DE MÓDULOS DE OUTRAS PASTAS PARA SEREM UTILIZADOS NESTE ARQUIVO 
// const snekearsControllers = require('./controllers/sneakersControllers')

//------------------- ROTAS PARA PRODUTOS -------------------|
//ROTA PARA VISUALIZAR TODOS OS PRODUTOS
// app.get('/produtos', snekearsControllers.GetAllSneakers)



// ATIVANDO A EXECUÇÃO DO SERVIDOR NA PORTA 3000
app.listen(port, () => {
    console.log(`O servidor está rodando no link http://localhost:${port}`);
})