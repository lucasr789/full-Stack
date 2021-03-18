var a = 10;
var b = 15;

if (a < b) {
  console.log(a + 'é maior que' + b);
}else{
  if (a < b ) {
    console.log(a + 'é menor que' + b);
  } 
  else {
    console.log(a + 'é igual a ' + b);
  }
}

var r = '';
switch(dia) {
  case 1: r= 'Domingo'; break;
  case 2: r= 'Segunda'; break;
  case 3: r= 'Terça'; break;
  case 4: r= 'Quarta'; break;
  case 5: r= 'Quinta'; break;
  case 6: r= 'Sexta'; break;
  case 7: r= 'Sábado'; break;

  default: r = 'Dia Inválido';

}

console.log(r);

// ------------------Operador Ternário ------------------------

a = 5;
b = 7;

if (a < b) {
  console.log(a + 'é maior que' + b);
}else{
  if (a < b ) {
    console.log(a + 'é menor que' + b);
  } 
  else {
    console.log(a + 'é igual a ' + b);
  }
}
var resposta = a > b ? 'maior' : a < b ? 'menor' : 'igual';
console.log(resposta);

// Somatorio  com While

var numeroAtual = 1;
var Somatorio = 0;

while (numeroAtual <= 10){
    //  Somatorio = Somatorio + numeroAtual;
  Somatorio += numeroAtual;
  numeroAtual++;

}
console.log('A Soma é' + Somatorio);

// ------------------ Somatorio com Do! ------------------------

do {
  Somatorio += numeroAtual;
  numeroAtual++;
} while (numeroAtual <= 10);

console.log('A Soma é' + Somatorio);
Somatorio = 0;

// ---------------- Ultilizando o FOR! ------------------------

for(numeroAtual = 1; numeroAtual <= 15; numeroAtual++){
  Somatorio += numeroAtual;
}
console.log('A Soma é' + Somatorio);


// ----------------- Funções ---------------------------------











