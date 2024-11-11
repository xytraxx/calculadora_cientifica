let expressao = "";

function atualizarTela(valor) {
  document.getElementById("tela").innerText = valor;
}

function adicionarNumero(numero) {
  if (expressao === "0") expressao = ""; // Para evitar 0 à esquerda
  expressao += numero;
  atualizarTela(expressao);
}

function adicionarOperacao(operacao) {
  if (/[+\-*/]$/.test(expressao)) return; // Evita duas operações consecutivas
  expressao += operacao;
  atualizarTela(expressao);
}

function calcular() {
  try {
    const resultado = eval(expressao);
    expressao = String(resultado);
    atualizarTela(resultado);
  } catch (e) {
    atualizarTela("Erro");
    expressao = "";
  }
}

function limpar() {
  expressao = "0";
  atualizarTela(expressao);
}

function calcularTrigonometria(funcao) {
  try {
    let valor = eval(expressao);
    if (funcao === 'sin') {
      valor = Math.sin(valor * Math.PI / 180); // Conversão para radianos
    } else if (funcao === 'cos') {
      valor = Math.cos(valor * Math.PI / 180);
    } else if (funcao === 'tan') {
      valor = Math.tan(valor * Math.PI / 180);
    }
    expressao = String(valor);
    atualizarTela(valor);
  } catch (e) {
    atualizarTela("Erro");
    expressao = "";
  }
}
