let inicio = [
    "retroceder, nunca...",
    "Não deixe para amanhã",
    "Quem acredita",
    "Deus ajuda"
];

let finais = [
    "Render-se jamais!",
    "O que se pode fazer hoje",
    "Sempre alcança!",
    "Quem cedo madruga!"
];

function frasesMotivacionaisAleatorias(){
    let inicioAleatorio = inicio[Math.floor(Math.random() * inicio.length)];
    let finaisAleatorios = finais[Math.floor(Math.random() * finais.length)];

    let frases = `${inicioAleatorio} ${finaisAleatorios}`;
    console.log(frases);
}

frasesMotivacionaisAleatorias();