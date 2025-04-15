let idade = 66

if (idade > 65) {
    console.log("Não é obrigado a votar.")
} else if (idade >= 18) {
    console.log("É obrigado a votar.")
} else if (idade >= 16 && idade <= 17) {
    console.log("Voto opcional.")
} else {
    console.log("Não pode votar.")
}