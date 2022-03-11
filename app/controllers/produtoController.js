const produtoRepository = require("../repositories/produtoRepository");
const produtoService = require("../services/produtoService");
var fs = require('fs');

const produtoController = {
    index: async (req, res) => {
        const produtos = await produtoRepository.findAll();
        return res.json(produtos);
    },

    store: async (req, res) => {
        const data = req.body
        const valor = data.map((produto) => {
            return produto.id_produto + " " + produto.quantidade + ";"
        })
        // console.log(data);
        const produtos = JSON.stringify(valor).replaceAll(",", "\n").replaceAll('"', "").replaceAll('[', "").replaceAll(']', "");
        var nome = "nono"

        let dateTo = new Date()
        var dia = String(dateTo.getDate()).padStart(2 ,'0');
        var mes = String(dateTo.getMonth() + 1).padStart(2, '0');
        var ano = dateTo.getFullYear();
        var dataAtual = dia + '-' + mes + '-' + ano;

        console.log(dataAtual);

        fs.appendFile(`C:/bipador-web/back/app/controllers/meuarquivo-${nome}-${dataAtual}.txt`, `\n${produtos}`, function (erro, data) {//

            if (erro) {
                console.log(erro);
                return res.status(404).json(erro)
            }

            console.log("Arquivo salvo");
        });

        return res.status(200).json(data)
    },
    show: async (req, res) => {
        const { id } = req.params 

        const produto = await produtoService.getOne(id)
        if (!produto) {
            console.log("to aqu");
            console.log(produto);
            return res.status(404).json(produto)
        }
        

        return res.status(201).json(produto)
    }

}

module.exports = produtoController