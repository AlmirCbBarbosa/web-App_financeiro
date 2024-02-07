const connect = require('../db.js');

class LancamentoFinanceiroController{
    static raiz(req, res){
        res.render('index', {title: 'Home Controle Financeiro'});
    };

    static async lancamento(req, res){
        const conn = await connect();
        const [rows] = await conn.query('SELECT *FROM eventos_financeiros;');
        console.log(rows[0].formaDePagamento);
        res.render('lancamento', {title:'lançamento'});
    }
}

module.exports = LancamentoFinanceiroController;