function converterUnidades(unidadeEntrada, cotacaoDolar, cotacaoEuro, cotacaoLibra) {
    if (cotacaoDolar) {
          return 

    } else if (cotacaoEuro) {
            return 

    } else if (cotacaoLibra) {
            return 
   
      return unidadeEntrada;
    }
  }
  const unidadeEntradaSelect = document.getElementById("unidade-entrada");
  const cotacaoDolar = document.getElementById("cotacao-dolar");
  const cotacaoEuro = document.getElementById("cotacao-euro");
  const cotacaoLibra = document.getElementById("cotacao-libra");
  const botaoConverter = document.getElementById("converter");
  const resultadoP = document.getElementById("resultado");
  
  botaoConverter.addEventListener("click", function () {
    const unidadeEntrada = parseFloat(valorInput.value);
    const cotacaoDolar = parseFloat(cotacaoDolarInput.value);
    const cotacaoEuro = parseFloat(cotacaoDolarInput.value);
    const cotacaoLibra = parseFloat(cotacaoDolarInput.value);
    
    
    const valorConvertido = converterUnidades(
      unidadeEntrada,
      cotacaoDolar,
      cotacaoEuro,
      cotacaoLibra
    );
  
    resultadoP.innerHTML = `${unidadeEntrada}(s) é igual a ${valorConvertido}(s)`;
  });