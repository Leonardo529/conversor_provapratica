function converterUnidades(unidadeEntrada, cotacaoDolar, cotacaoEuro, cotacaoLibra, resultado)

    Real_Dolar(){
        this.resultado = (this.valor) / (this.cotacaoDolar);
        this.resultado = parseFloat(this.resultado.toFixed(2));
        }

    Real_Euro(){
            this.resultado = (this.valor) / (this.cotacaoEuro);
            this.resultado = parseFloat(this.resultado.toFixed(2));
            }

    Real_Libra(){
                this.resultado = (this.valor) / (this.cotacaoLibra);
                this.resultado = parseFloat(this.resultado.toFixed(2));
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