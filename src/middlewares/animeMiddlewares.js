const listaAnimes = require('../mocks/animeList');

function middlewareGetAnimeByID(req, res, next){
    const id = parseInt(req.params.id);
    const anime = listaAnimes.find(p => p.id === id);

    try {
        if (!anime) {
            return res.send({ message: "🔴 Anime não encontrado!"})
        }
        next();
    } catch (error) {
        return res.send({ message: `❌ Não temos certeza do que aconteceu! Erro: ${error}`})
    }
};

function middlewareCreateAnime(req, res, next) {
    const {
        nome,
        ano,
        nota,
        genero,
        episodios,
        imagem,
        sinopse 
    } = req.body;

    try {
        if(!nome || !ano || !nota || !genero || !episodios || !imagem || !sinopse){
            return res.send({ message: "🔴 Dados incompletos! Por favor insira todos os dados." });
        }
        //Obs: Construir lógica para verificar se já existe um anime com o mesmo nome.
        next();
    } catch (error) {
        return res.send({ message: `❌ Não temos certeza do que aconteceu! Erro: ${error}` });
    }
};

function middlewareUpdateAnime(req, res, next) {
    const { id } = req.params;
    const animeIndex = listaAnimes.findIndex(anime => anime.id === Number(id));
    const {
        nome,
        ano,
        nota,
        genero,
        episodios,
        imagem,
        sinopse 
    } = req.body;

    try {
        if (animeIndex === -1) {
            return res.send({ message: "🔴 Anime não encontrado" });
        }
        if (!nome || !ano || !nota || !genero || !episodios || !imagem || !sinopse) {
            return res.send({ message: "🔴 Dados incompletos! Por favor insira todos os dados." });
        }
        next();
    } catch (error) {
       return res.send({ message: `❌ Não temos certeza do que aconteceu! Erro: ${error}` });
    }
};

function middlewareDeleteAnime(req, res, next) {
    const { id } = req.params;
    const animeIndex = listaAnimes.findIndex(anime => anime.id === Number(id));

    try {
        if (animeIndex === -1) {
           return res.send({ message: "🔴 Anime não encontrado! " });
        };
        next();
    } catch (error) {
        return res.send({ message: `❌ Não temos certeza do que aconteceu! Erro: ${error}` });
    }
};


module.exports = {
    middlewareGetAnimeByID,
    middlewareCreateAnime,
    middlewareUpdateAnime,
    middlewareDeleteAnime
}