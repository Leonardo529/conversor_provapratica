function converterUnidades(unidadeEntrada, cotacaoDolar, cotacaoEuro, cotacaoLibra) {
    if (unidadeEntrada === "grama" && unidadeconvertida === "quilograma") {
          return valor / 1000;
    } else if (unidadeEntrada === "grama" && unidadeconvertida === "hectograma") {
          return valor / 100; 
    } else if (unidadeEntrada === "quilograma" && unidadeconvertida === "grama") {
       return valor * 1000; 
    } else if (unidadeEntrada === "quilograma" && unidadeconvertida === "hectograma") {
          return valor * 10;
    } else if (unidadeEntrada === "hectograma" && unidadeconvertida === "quilograma") {
          return valor / 10;
    } else if (unidadeEntrada === "hectograma" && unidadeconvertida === "grama") {
          return valor * 100; 
    } else {
      return valor;
    }
  }
  const botaoConverter = document.getElementById("converter");
  const unidadeEntradaSelect = document.getElementById("unidade-entrada");
  const cotacaoDolar = document.getElementById("cotacao-dolar");
  const cotacaoEuro = document.getElementById("cotacao-euro");
  const cotacaoLibra = document.getElementById("cotacao-libra");
  const resultadoP = document.getElementById("resultado");
  
  botaoConverter.addEventListener("click", function () {
    const valor = parseFloat(valorInput.value);
    const unidadeEntrada = unidadeEntradaSelect.value;
    const unidadeconvertida = unidadeconvertidaSelect.value;
  
    const valorConvertido = converterUnidades(
      valor,
      unidadeEntrada,
      unidadeconvertida
    );
  
    resultadoP.innerHTML = `${valor} ${unidadeEntrada}(s) é igual a ${valorConvertido} ${unidadeconvertida}(s)`;
  });