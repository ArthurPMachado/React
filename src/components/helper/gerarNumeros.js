// RESOLUCAO DO CURSO
function gerarNumeroNaoContido(min, max, array) {
  const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
  return array.includes(aleatorio)
    ? gerarNumeroNaoContido(min, max, array)
    : aleatorio;
}

function gerarNumeros(qtdeSorteada) {
  const numerosSorteados = Array(qtdeSorteada)
    .fill(0)
    .reduce((total) => {
      const novoNumeroSorteado = gerarNumeroNaoContido(1, 60, total);
      return [...total, novoNumeroSorteado];
    }, [])
    .sort((numero1, numero2) => numero1 - numero2);

  return numerosSorteados;
}

// MINHA RESOLUCAO
/*
function gerarNumeros(qtdeSorteada) {
  let contador = 0;
  const min = 1;
  const max = 61;

  const numerosMegaSena = [];

  while (contador < qtdeSorteada) {
    const numerosSorteados = Math.floor(Math.random() * (max - min)) + 1;

    let checarNumeroRepetido = numerosMegaSena.some((item) => item === numerosSorteados);

    if (!checarNumeroRepetido) {
      numerosMegaSena.push(numerosSorteados);
    }

    while (checarNumeroRepetido) {
      const outrosNumerosSorteados = Math.floor(Math.random() * (max - min)) + 1;

      checarNumeroRepetido = numerosMegaSena.some((item) => item === outrosNumerosSorteados);

      if (!checarNumeroRepetido) {
        numerosMegaSena.push(outrosNumerosSorteados);
      }
    }

    contador += 1;
  }

  return numerosMegaSena;
}
*/

export default gerarNumeros;
