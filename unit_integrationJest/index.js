const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

const verifiqueSe = (valor) => {
  const assercoes = {
    ehExatamenteIgualA(esperado) {
      if (valor !== esperado) {
        throw {};
      }
    },
  };
  return assercoes;
};

const teste = (titulo, funcaoDeTeste) => {
  try {
    funcaoDeTeste();
    console.log(`${titulo} passsou!`);
  } catch {
    console.error(`${titulo} não passou!!!`);
  }
};

teste('somaHorasExtras', () => {
  const esperado = 2500;
  const retornado = somaHorasExtras(2000, 500);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});

teste('calculaDesconto', 2200, calculaDescontos(2500, 300));
