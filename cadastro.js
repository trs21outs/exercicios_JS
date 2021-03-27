let moradores = [{
    nome: "raphael",
    altura: 166,
    sexo: 'M'
}, {
    nome: "thiago",
    altura: 183,
    sexo: 'M'
}, {
    nome: "veronica",
    altura: 163,
    sexo: 'F'
}, {
    nome: "sonia",
    altura: 164,
    sexo: 'F'
}, {
    nome: "renan",
    altura: 184,
    sexo: 'M'
}];

for(let i = 0; i < 45; i++){
    let modelo = moradores[i % 5];
    let morador = Object.create(modelo);

    morador.altura += i;

    morador.nome += "("+ i + ")";
    
    moradores.push(morador);
}

//true - verde, false - vermelha
let salaEstaLivre = true;

let moradorMaiorAltura;
let moradorMenorAltura;
let totalAlturaMoradores = 0;

let totalMoradores = moradores.length;

let sentinela = 5;
let contador = 5;

while (moradores.length > 0) {

    //simulando uma demora no atendimento
    if(contador == sentinela){
        salaEstaLivre = true;
        contador = 0;
    } 
        
    if (salaEstaLivre) {

        let morador = moradores.shift();

        if(morador.sexo != undefined && morador.sexo != "M") continue;

        totalAlturaMoradores += morador.altura;

        salaEstaLivre = false;

        if (moradorMaiorAltura == undefined || moradorMenorAltura == undefined) {
            //primeiro morador da fila
            moradorMenorAltura = morador;
            moradorMaiorAltura = morador;
        } else {
            //não é o primeiro morador da fila

            //se morador atual tiver altura menor que a altura do morador mais baixo,
            // morador atual vira o menor morador da comunidade
            if (morador.altura < moradorMenorAltura.altura) {
                moradorMenorAltura = morador;
            }

            if (morador.altura > moradorMaiorAltura.altura) {
                moradorMaiorAltura = morador;
            }
        }

        console.log(morador.altura);
    }

    contador++;
}

console.log("menor morador", moradorMenorAltura, "maior morador", moradorMaiorAltura);
console.log("média altura moradores: " + (totalAlturaMoradores / totalMoradores));