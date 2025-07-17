// Este é o 9/10, um organizador de terefas por prioridade. 1/2 definido como dificil, porém não houve tanta dificuldade assim,
// exigiu atenção e pesquisa, o que é normal.

let tarefas = [
    { titulo: "Ler 7 páginas de um livro", prioridade: 3 },
    { titulo: "30 minutos de exercícios", prioridade: 2 },
    { titulo: "Preparar o café da manhã", prioridade: 1 },
    { titulo: "organizar roupas", prioridade: 5 },
    { titulo: "Fazer compras", prioridade: 2 }
];

function addTarefas(titulo, prioridade) {
    if (prioridade < 1 || prioridade > 5) {
        console.log("Prioridade inválida, priorize apenas entre 1 e 5.");
        return;
    }

    let novaTarefa = {
        titulo: titulo,
        prioridade: prioridade,
    };

    tarefas.push(novaTarefa);
    console.log(`A tarefa "${titulo}" de prioridade ${prioridade} adicionada.`);
}

addTarefas("Estudar", 1);
console.log(tarefas);