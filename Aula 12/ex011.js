var agora = new Date()
var idade = agora.getHours
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log(`Não Vota`)
}
else if //(idade >=16 && idade < 18 )
    (idade < 18 || idade > 65) {
    console.log(`Voto Opcional`)
}
else
    console.log(`Voto obrigatorio`)