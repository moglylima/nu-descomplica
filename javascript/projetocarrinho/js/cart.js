var valorTotal = [0, 0];
var valorProduto = [50.0, 30.0];
var quantidadeProduto = [0, 0];

function adicionarProduto(posicao) {
  var quantidade = document.getElementById("quantidade" + posicao);

  var total = document.getElementById("total" + posicao);
  quantidadeProduto[posicao] += 1;
  valorTotal[posicao] =
    Number.parseFloat(valorProduto[posicao]) * quantidadeProduto[posicao];
  quantidade.innerHTML = quantidadeProduto[posicao];
  total.innerHTML = valorTotal[posicao].toFixed(2);

  valorTotalCompra();
}

function removerProduto(posicao) {
  var quantidade = document.getElementById("quantidade" + posicao);
  var total = document.getElementById("total" + posicao);
  if (quantidadeProduto[posicao] > 0) {
    quantidadeProduto[posicao] -= 1;
    valorTotal[posicao] =
      Number.parseFloat(valorProduto[posicao]) * quantidadeProduto[posicao];
    quantidade.innerHTML = quantidadeProduto[posicao];
    total.innerHTML = valorTotal[posicao].toFixed(2);
  }
  valorTotalCompra();
}

function valorTotalCompra() {
  var total = document.getElementById("subtotalcompra");
  var valor = 0;

  for (var i = 0; i < valorTotal.length; i++) {
    valor += valorTotal[i];
  }

  total.innerHTML = valor.toFixed(2);
}
