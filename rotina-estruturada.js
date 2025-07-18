// Tentei aprimorar um organizador de tarefas com possíveis conflitos de horário, mas este, entre todos os outros exercícios
// foi um pouco mais complexo de fazer. Mas quero rever este formato de horários em outro momento.

let atividades = [ 
    { nome: "leitura", inicio: 6, fim: 6.5 },
    { nome: "Preparar e tomar café da manhã", inicio: 6.70, fim: 7.30 },
    { nome: "Trabalhar", inicio: 8, fim: 12 }
];

function novaAtividade(nome, inicio, fim) {
    for (let atividade of atividades) {
        if (inicio < atividade.fim && fim > atividade.inicio) {
            console.log(`Conflito com "${atividade.nome}" (${atividade.inicio}h às ${atividade.fim}h) favor verificar outro horário.`);
            return;
        }
    }

    atividades.push({ nome, inicio, fim });
    console.log(`Atividade "${nome}" adicionada com sucesso (${inicio}h às ${fim}h).`)
}


// Exemplos de teste:
novaAtividade("Estudo", 7.2, 8);   // Aqui da conflito
novaAtividade("Almoço", 12, 13);   // Aqui adiciona

console.log("\nRotina atualizada:");
console.log(atividades);