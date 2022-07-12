// Crie um array que receba 5 itens e exiba no console.

let dados = ["item1", "item2", "item3", "item4", "item5"];
console.log(dados);

// Utilize um método para adicionar um nome ao inicio do array.

const dadosNovos = dados.unshift("item0");
console.log(dadosNovos);

// Utilize um método para remover o último nome do array.

const mainItem = dados.pop();
console.log(mainItem);

// Utilize um método para adicionar dois nomes ao fim do array.

const addItem = dados.push("item6", "item7");
console.log(addItem);

// Utilize um método para remover o primeiro nome do array.

const popItem = dados.shift();
console.log(popItem);

// Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]

let number = [7, 5, 6, 3, 8, 9, 2, 1, 4];
console.log(number.sort());
