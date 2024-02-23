const campos = document.querySelectorAll("[required]");
const entradaDeDados = document.querySelectorAll("[data-input]");

const padroesDeEntrada = {    
    "entrada":{//classificação
        "salario": [
            "Débito em conta-Banco do Brasil-Almir",
            "Débito em conta-Banco do Brasil-Liliane",
            "Débito em conta-Banco Itaú-Liliane"
        ], 
        "ticket": [
            "Recarga de cartão"
        ],        
        "outros":[
            "Ver observação"
        ]
    }

    ,
    "saida":{//classficação
        "despesas_mensais":[
            "Cartão de Débito-Banco do Brasil-Almir",
            "Cartão de Débito-Banco do Brasil-Liliane",
            "Cartão de Débito-Banco Itau-Liliane",
            "Dinheiro-Banco do Brasil-Almir",
            "Dinheiro-Banco do Brasil-Liliane",
            "Dinheiro",
            "Cartão Vale Refeição-Liliane"
        ],
        "financiamentos":[
            "Cartão de Crédito-Banco do Brasil-Almir",
            "Cartão de Crédito-Banco do Brasil-Liliane",
            "Cartão de Crédito-Banco Itau-Liliane",
            "Dinheiro"
        ],
        "despesas_fixas":[
            "Cartão de Débito-Banco do Brasil-Almir",
            "Cartão de Débito-Banco do Brasil-Liliane",
            "Cartão de Débito-Banco Itau-Liliane",
            "Dinheiro-Banco do Brasil-Almir",
            "Dinheiro-Banco do Brasil-Liliane",
            "Dinheiro"
        ],
        "despesas_extras":[
            "Cartão de Débito-Banco do Brasil-Almir",
            "Cartão de Débito-Banco do Brasil-Liliane",
            "Cartão de Débito-Banco Itau-Liliane",
            "Dinheiro-Banco do Brasil-Almir",
            "Dinheiro-Banco do Brasil-Liliane",
            "Dinheiro"
        ]
    }
};

//Criando options para o campo classificação, tipo, forma de pagamento
const classificacao = Object.keys(padroesDeEntrada);

classificacao.forEach( evento =>{       
    const selectClassificacao = entradaDeDados[2];// setando select do campo Classificação
        
    //criando elemento option e atribuindo propriedades
    const  optionClassificacao = document.createElement('option');
    optionClassificacao.value = evento;
    optionClassificacao.textContent = evento;
    //renderizando no html
    selectClassificacao.appendChild(optionClassificacao);        
}
);

entradaDeDados[2].addEventListener('change', gerarOpcaoTipo);

function gerarOpcaoTipo (evento){
    const opcaoSelecionada = evento.target.value;
    console.log(`o valor selecionado foi: ${opcaoSelecionada}`);
}

