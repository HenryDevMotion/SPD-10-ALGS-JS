function cronometroReverso(minutos){
    let tempoTotal = minutos * 60;

    let intervalo = setInterval(() => {
        tempoTotal--;

        let min = Math.floor(tempoTotal / 60);
        let seg = tempoTotal % 60;
        let segundosFormatados = String(seg).padStart(2, "0");

        console.log(`${min}:${segundosFormatados}`);

        if (tempoTotal <= 0) {
            clearInterval(intervalo);
            console.log("Tempo encerrado");
        }
    }, 1000);
}

cronometroReverso(0.1);