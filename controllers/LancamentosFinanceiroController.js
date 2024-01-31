class LancamentoFinanceiroController{
    static raiz(req, res){
        res.render('index', {title: 'Home Controle Financeiro'});
    };

    static lancamento(req, res){
        res.render('lancamento', {title:'lançamento'});
    }
}

module.exports = LancamentoFinanceiroController;