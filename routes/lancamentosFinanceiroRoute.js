const {Router} = require('express');
const LancamentosFinanceiroController = require('../controllers/LancamentosFinanceiroController.js');

const router = Router();

router.get('/lancamento', LancamentosFinanceiroController.lancamento);
router.get('/', LancamentosFinanceiroController.raiz);


module.exports = router;