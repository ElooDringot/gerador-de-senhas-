function gerarSenha(tamanho = 12) {
    const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%&*?";

    const caracteres = maiusculas + minusculas + numeros + simbolos;

    let senha = "";

    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    return senha;
}

// Exemplo:
console.log("Senha gerada:", gerarSenha(16));
