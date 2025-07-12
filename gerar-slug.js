function gerarSlug(texto){
    texto = texto.toLowerCase();
    
    texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    texto = texto.replace(/[^a-z0-9\s-]/g, "");

    texto = texto.trim();

    texto = texto.replace(/\s+/g, '-');

    return texto;

}




console.log(gerarSlug("  Olá Mundo! Nós gostamos de Café & Código  "));
// Retorna: "ola-mundo-nos-gostamos-de-cafe-codigo"

console.log(gerarSlug("Pratique programação todo dia!"));
// Retorna: "pratique-programacao-todo-dia"

console.log(gerarSlug("Eu não curto São João & Forró, mas curto canjica!"));
// Retorna: "eu-nao-curto-sao-joao-forro-mas-curto-canjica"