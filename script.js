function convertCurrency()
         
  const realInput = document.getElementById("real").value;
  const cotacaoDolarRate = document.getElementById("real_dolar").value;
  const cotacaoEuroRate = document.getElementById("real_euro").value;
  const cotacaoLibraRate = document.getElementById("real_libra").value;
  
  botaoConverter.addEventListener("click", function () {
    const unidadeEntrada = parseFloat(unidadeEntrada.valueOf);
    const cotacaoDolar = cotacaoDolar.value;
    const cotacaoEuro = cotacaoDolar.value;
    const cotacaoLibra = cotacaoDolar.value;
    
    
    const UnidadeEntradaConvertido = converterUnidades(
      unidadeEntrada,
      cotacaoDolar,
      cotacaoEuro,
      cotacaoLibra
    );
  
    resultadoP.innerHTML = `${unidadeEntrada}(s) é igual a ${UnidadeEntradaConvertido}(s)`;
  });