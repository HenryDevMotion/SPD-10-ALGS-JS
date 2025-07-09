function conversorTemperatura(temperatura, unidade) {
    if (isNaN(temperatura)) {
        console.log("Erro: A temperatura informada não é um número válido.");
        return;
    }

    unidade = unidade.toLowerCase();

    if (unidade !== "c" && unidade !== "f") {
        console.log("Erro: A unidade deve ser C para Celsius ou F para Fahrenheit.");
        return;
    }

    let resultado;

    if (unidade === "c") {
        resultado = (temperatura * 9/5) + 32;
        console.log(`${temperatura}°C é igual a ${resultado.toFixed(2)}°F`);
    } else {
        resultado = (temperatura - 32) * 5/9;
        console.log(`${temperatura}°F é igual a ${resultado.toFixed(2)}°C`);
    }
}


conversorTemperatura(30, "C"); // 30°C → 86.00°F

conversorTemperatura(100, "f"); // 100°F → 37.78°C

conversorTemperatura("abc", "C"); // Não é número

conversorTemperatura(50, "X"); // Unidade inválida