function convertCurrency(){
         
  const realValue = document.getElementById("real").value;
  const cotacaoDolarRate = document.getElementById("real_dolar").value;
  const cotacaoEuroRate = document.getElementById("real_euro").value;
  const cotacaoLibraRate = document.getElementById("real_libra").value;
  
 const dolarValue = realValue / cotacaoDolarRate;
 const euroValue = realValue / cotacaoEuroRate;
 const libraValue = realValue / cotacaoLibraRate;


document.getElementById("Dólar").value = dolarValue.toFixed(2);
document.getElementById("Euro").value = euroValue.toFixed(2);
document.getElementById("Libra Esterlina").value = libraValue.toFixed(2);

}