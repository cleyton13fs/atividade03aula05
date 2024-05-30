const perguntas = [
  "Telefonou para a vítima?",
  "Esteve no local do crime?",
  "Mora perto da vítima?",
  "Devia para a vítima?",
  "Já trabalhou com a vítima?"
];

let contadorSim = 0;

perguntas.forEach(pergunta => {
  let resposta;
  do {
    resposta = prompt(pergunta + " (S/N)").toUpperCase();
  } while (resposta !== 'S' && resposta !== 'N');
  
  if (resposta === 'S') {
    contadorSim++;
  }
});

let classificacao;
if (contadorSim === 5) {
  classificacao = "Assassino";
} else if (contadorSim >= 3) {
  classificacao = "Cúmplice";
} else if (contadorSim === 2) {
  classificacao = "Suspeita";
} else {
  classificacao = "Inocente";
}

alert("Classificação: " + classificacao);
