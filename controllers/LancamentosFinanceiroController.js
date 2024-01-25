class LancamentoFinanceiroController{
    static raiz(req, res){
        res.render('index', {title: 'Home Controle Financeiro'});
    };
}

module.exports = LancamentoFinanceiroController;