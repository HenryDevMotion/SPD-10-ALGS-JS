function lembreteHidratacao(hidratacao){
    let minuto = 60000;
    let intervalo = hidratacao * minuto;
    let contador = 0;
    let maxAlertas = 5;

    let intervalId = setInterval(() => {
        contador++;

        console.log("Hora de beber água");

        if (contador >= maxAlertas){
            clearInterval(intervalId);
            console.log("Chega de lembretes por hoje")
        }
    }, intervalo);
}

lembreteHidratacao();