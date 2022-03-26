// Promisses sao estrutura assincronas do javaescrita
// funcoes que ocorrem fora da sequencia natural do programa

// cria uma promessa, que apos 2000ms vai retornar o estatus 'resolvida!'
// precisamos de uma funcao assincrona

async function resolverPromessa() {
    const myPromise = new Promise((resolve, rejec) => {
        window.setTimeout(() => {
            resolve(console.log('resolvida!'));
        }, 5000);
    });
        // // para voce poder pegar o resultado de uma promise, é necessario evocar o metodo await
        // const resolved = await myPromise
        //     .then((result) => result + " passando pelo then,")
        //     .then((result) => result + " passando novamente e agora acabou!")
        //     .catch((err) => console.log(err.message));
        //     console.log(resolved);

        // usando try/catch
        try {
            result = await myPromise
            .then((result) => result + ' passando pelo then')
            .then((result) => result + 'e agora acabou!')
        } catch (err) {
            result = err.message;
        }

    return result;
}

resolverPromessa();