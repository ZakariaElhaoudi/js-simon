/*Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


// Visualizzare in pagina 5 numeri casuali.
const randomNum = createNumRandomOrderArr(1,100, 5,)
console.log(randomNum);

// parte un timer di 30 secondi.
let timeLeft = 30;
console.log(timeLeft);

let timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
  } else {
    console.log(
    timeLeft--)
  }
}



 // FUNZIONI 
// funzione che creare numeri in ordine casuale nell’array 
function createNumRandomOrderArr(min,max,range,) {
    const arrayNum = [];
   
    while(arrayNum.length < range) { 
        // creare un numero casuale nel min max 
    const nuovoNum = numRandomMinMax(min,max) 
        if(!arrayNum.includes(nuovoNum)){
            arrayNum.push(nuovoNum)
        }
        
    }
    
    return arrayNum
}

// funzione che creare numeri random
function numRandomMinMax(min,max) {
    return Math.floor(Math.random() * (max - min +1) + min)
}
