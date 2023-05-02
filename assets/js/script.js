// let i = 0;
// let text = '';

// while(i < 10){
//     text += 'The number is ' + i +"\n"
//     i++
// }
// console.log(text);




// let i = 10
// let text = '';

// while(i >= 0){
//     text += 'The number is ' + i +"\n"
//     i--
// }
// console.log(text);





let numeros = [];
let maximo = '';
let minimo = '';

while (true) {
    let entrada = prompt("digite um número");

    if (entrada == "PARAR") {
        let soma = 0;
        let posicao = 0;
        while (posicao < numeros.length) {
            let num = numeros[posicao];
            soma += num;
            if (maximo == '' || num > maximo) {
                maximo = num;
            } if (minimo == '' || num < minimo) {
                minimo = num;
            }
            posicao++;
        }
        console.log("Soma dos números: " + soma);
        console.log("Média dos números: " + soma / numeros.length);
        console.log("Maior número: " + maximo);
        console.log("Menor número: " + minimo);
        break;
    } else {
        let num = parseFloat(entrada);
        if (!isNaN(num)) {
            numeros.push(num);
        }
        else {
            console.log("Inválido: " + entrada);
        }
    }
}
