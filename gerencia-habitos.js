// Trata-se de um criador/gerenciador de hábitos que da um percentual do prograsso na semana para o usuário em termos
// de evolução.

// Este é o 2/3 na categoria que criei como dificuldade média (que são 6, 7 e 8), entre os 10 algoritmos, e este foi bem
// complexo, sem buscar por ajuda eu não concluiria sozinho. Bom, é mais ou menos isso.

let habitosSemanais = [
    { dia: "Segunda", feito: true },
    { dia: "Terça", feito: false },
    { dia: "Quarta", feito: false },
    { dia: "Quinta", feito: true },
    { dia: "Sexta", feito: false },
    { dia: "Sabado", feito: false },
    { dia: "Domingo", feito: false },
];

function diaDaSemana(diaEspecifico) {
    let encontrado = false;

    for (let i = 0; i < habitosSemanais.length; i++) {
        if (habitosSemanais[i].dia.toLowerCase() === diaEspecifico.toLowerCase()) {
            habitosSemanais[i].feito = true;
            console.log(`Feito na ${habitosSemanais[i].dia}!`);
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        console.log(`O dia "${diaEspecifico}" não foi encontrado. Verifique o dia informado e tente novamente!`);
    }
}

function mostrarEvolucao() {
    let feitos = 0;

    console.log("Progresso da semana:");
    
    for (let i = 0; i < habitosSemanais.length; i++) {
        let progresso = habitosSemanais[i].feito ? "feito" : "pendente";
        console.log(`${habitosSemanais[i].dia}: ${progresso}`);

        if (habitosSemanais[i].feito) {
            feitos++;
        }
    }

    let percentual = ((feitos / habitosSemanais.length) * 100).toFixed(2);
    console.log(`\nEvolução da semana: ${percentual}% concluído.`);

// Teste:

// diaDaSemana("terça");
// diaDaSemana("domingo");
// diaDaSemana("feriado");

// mostrarEvolucao();

}