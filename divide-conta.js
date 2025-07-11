// Este foi muito fácil não, apanhei, precisei de ajuda além da conta, e tudo bem! Acho que é isso.

// A proposta é uma divisão de conta por pessoas em um restaurate com ou sem gorjeta.

function dividirConta(conta) {
    let { valorTotal, pessoas, gorjeta } = conta;

    if (isNaN(valorTotal) || isNaN(pessoas) || isNaN(gorjeta)) {
        console.log("Erro: Todos os valores devem ser números.");
        return;
    }

    if (pessoas <= 0) {
        console.log("Erro: O número de pessoas deve ser maior que zero.");
        return;
    }

    let valorComGorjeta = valorTotal + (valorTotal * (gorjeta / 100));
    let valorPorPessoaComGorjeta = valorComGorjeta / pessoas;
    let valorPorPessoaSemGorjeta = valorTotal / pessoas;

    valorPorPessoaComGorjeta = valorPorPessoaComGorjeta.toFixed(2);
    valorPorPessoaSemGorjeta = valorPorPessoaSemGorjeta.toFixed(2);

    console.log("Valor total: R$ " + valorTotal.toFixed(2));
    console.log("Pessoas: " + pessoas);
    console.log("Gorjeta: " + gorjeta + "%");
    console.log("Valor por pessoa:");
    console.log(`R$ ${valorPorPessoaSemGorjeta} (sem gorjeta)`);
    console.log(`R$ ${valorPorPessoaComGorjeta} (com gorjeta)`);

}