const {Router} = require('express');
//const LancamentosFinanceiroController = require('../controllers/LancamentosFinanceiroController.js');

const router = Router();

router.get('/', (req, res)=>{
    res.render('index', {title: 'Home Controle Financeiro'});
});

module.exports = router;