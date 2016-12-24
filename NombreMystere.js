alert("Trouver un nombre aléatoire");
var min = prompt("Entrer un nombre positif min");
var max = prompt("Entrer un nombre positif max");

var numRand = Math.floor(Math.random() * (max- min + 1) | 0 + min);

var nbTentative = prompt("Combien d'essais ?");

var numUser = prompt("Entrer un nombre positif");
for(i = 0; i < nbTentative-1; i++){

  if(numRand > numUser){
    var numUser = prompt("c'est plus");
  }
  
  else if(numRand<numUser){
    var numUser = prompt("c'est moins");
  }
  
  else if(numRand == numUser){
    alert("c'est gagné !!");
    break;
  }
}