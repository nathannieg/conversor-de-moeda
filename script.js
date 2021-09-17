function Converter() {
  // pegar elemento html com getElementById
  // pegar apenas o valor do elemento com .value
  // transformar string em float com parseFloat()
  const valorReal = parseFloat(document.getElementById('valor').value).toFixed(
    2
  )
  //console.log(valorReal)

  // convertendo dólar em real
  const valorDolar = (valorReal / 5.29).toFixed(2)
  const valorEuro = (valorReal / 6.21).toFixed(2)
  //console.log(`Valor em Dólar: ${valorDolar}`)
  //console.log(`Valor em Euro: ${valorEuro}`)

  const valorConvertidoDolar = document.getElementById('value-dolar')
  valorConvertidoDolar.innerHTML = `U$${valorDolar}`

  const valorConvertidoEuro = document.getElementById('value-euro')
  valorConvertidoEuro.innerHTML = `€${valorEuro}`
}

/* Desafios 

- Adicionar outras moedas para converter (feito).
- Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra.
- Conversor de temperaturas entre farenheit, kelvin e celcius.
- Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin. */
