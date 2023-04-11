function converterUnidades(unidadeEntrada, cotacaoDolar, cotacaoEuro, cotacaoLibra) {
    if (cotacaoDolar > unidadeEntrada) {
          return unidadeEntrada * cotacaoDolar;

    } else if (cotacaoEuro) {
          return unidadeEntrada * cotacaoEuro; 

    } else if (cotacaoLibra) {
          return unidadeEntrada * cotacaoLibra;

    } else {  
      return unidadeEntrada;   
    }
}
  const unidadeEntradaInput = document.getElementById("unidade-entrada");
  const cotacaoDolarInput = document.getElementById("cotacao-dolar");
  const cotacaoEuroInput = document.getElementById("cotacao-euro");
  const cotacaoLibraInput = document.getElementById("cotacao-libra");
  const botaoConverter = document.getElementById("converter");
  const resultadoP = document.getElementById("resultado");
  
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