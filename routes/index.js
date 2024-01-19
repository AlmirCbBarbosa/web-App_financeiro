const express = require('express');
const lancamentosFinanceiro = require('./lancamentosFinanceiroRoute.js');

module.exports = app =>{
  app.use(express.json());
  app.use(lancamentosFinanceiro);
}











/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Controle Financeiro' });
});

module.exports = router;
*/