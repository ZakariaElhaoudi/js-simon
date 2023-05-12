/*Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

// variabili globali 
let numUser = "";
let rispGiuste = [];
let rispCorette = 0;

// Visualizzare in pagina 5 numeri casuali.
const randomNum = createNumRandomOrderArr(1,100, 5,)
console.log(randomNum);
const numeriVincenti = document.getElementById("numeri")
numeriVincenti.innerHTML = "Numeri vincenti " + randomNum

// parte un timer di 30 secondi.
let time = 0;
console.log(time);


let stop = setInterval(function() {
    
  if (time === 30) {
    clearInterval(stop);
     
    numeriVincenti.innerHTML = "";
    for (let i = 1; i < randomNum.length + 1 ; i++) { // l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
        numUser = parseInt(prompt("Inserisci i numeri che hai visto uno alla volta:"))
        if (randomNum.includes(numUser)) {
            
           
            rispCorette =
            rispGiuste.push(numUser)
            console.log(rispCorette + " Risposte Corrette");
            console.log(rispGiuste);
        } else {
            console.log("you lose");
        }
    } 
    // randomNum.splice(0,randomNum.length);
    // console.log(randomNum);
    
  } else {
    console.log(
    time++)
  }
  
}, 1000 );






 // FUNZIONI 
// funzione che creare numeri in ordine casuale nell’array 
function createNumRandomOrderArr(min,max,count,) {
    const arrayNum = [];
   
    while(arrayNum.length < count) { 
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
