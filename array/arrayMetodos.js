const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); // remove o ultimo elemento
console.log("1", pilotos);

pilotos.push("Verstappen"); // adiciona no fim do array
console.log("2", pilotos);

pilotos.shift(); // remove o primeiro elemento
console.log("3", pilotos);

pilotos.unshift("Hamilton"); // adiciona no começo do array
console.log("4", pilotos);

// splice() pode adicionar e removeer elementos

// ADICIONAR
pilotos.splice(2, 0, "Bottas", "Massa");
console.log("5", pilotos);

// REMOVER
pilotos.splice(3, 1); // Massa sai denovo
console.log("6", pilotos);

const algunsPilotos1 = pilotos.slice(2); // retorna um novo array
console.log(algunsPilotos1); // pega elementos a partir do índice 2 incluindo o índice 2

const algunsPilotos2 = pilotos.slice(1, 4); // pega elementos a partir do 1 até o 4, não incluindo o 4 e incluindo o 1
console.log(algunsPilotos2);
