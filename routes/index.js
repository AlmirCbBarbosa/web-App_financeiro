const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const lancamentosFinanceiro = require('./lancamentosFinanceiroRoute.js');

module.exports = app =>{
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());  

  app.use(lancamentosFinanceiro);
}
