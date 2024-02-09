const connect = require('../db.js');

class LancamentoFinanceiroController{
    static raiz(req, res){
        res.render('index', {title: 'Home Controle Financeiro'});
    };

    static async lancamento(req, res){    
        const conn = await connect();    
        const [rows] = await conn.query('SELECT *FROM eventos_financeiros;');       
        
        //-----------------trabalhando os dados----------------//
        rows.forEach(transacao =>{
            //data no formato dd/mm/aaaa
            let isoData = transacao.dataEvento;
            let data = new Date(isoData);
            data = data.toISOString();
            data = data.split("T")[0].split("-").reverse();
            data = data[0] + '/' + data[1] + '/' + data[2];            
            transacao.dataEvento = data;
            
            //valor com duas casas decimais
            transacao.valor = transacao.valor.toFixed(2);            
        });
        
        res.render('lancamento', {rows});
    }
}

module.exports = LancamentoFinanceiroController;