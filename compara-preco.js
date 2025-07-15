// Trata-se de um comparador de preços simples mas funcional na minha opinião.

// 3º dificuldade média e 8/10 - A dificuldade deste exercício não assunta, mas precisa pensar e sim, precisei pesquisar um pouco.

let produto1 = { preco: 1.40, volume: 500 };
let produto2 = { preco: 2.00, volume: 1000 };

function comparaProdutos(agua1, agua2){
    let custo1 = agua1.preco / agua1.volume;
    let custo2 = agua2.preco / agua2.volume;

    console.log(`Produto 1: R$ ${custo1.toFixed(4)} por unidade`)
    console.log(`Produto 2: R$ ${custo2.toFixed(4)} por unidade`)

    if (custo1 < custo2){
        let economia = (((custo2 - custo1) / custo2) * 100).toFixed(2);
        console.log(`Produto 1 é mais vantajo. Você economiza ${economia}%`);
    }   else if (custo2 < custo1) {
        let economia = (((custo1 - custo2) / custo1) * 100).toFixed(2);
        console.log(`Produto 2 compensa mais. Você economiza ${economia}%`);
    } else {
        console.log(`Os produtos tem o mesmo custo por unidade.`);
    }
}


comparaProdutos();