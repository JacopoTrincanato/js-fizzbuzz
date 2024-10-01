//FASE 1: preparazione
//creo la variabile i
let i

//FASE 2: raccolta Dati
//assegno un valore a i
i = 1

//assegno una condizione a i
i <= 100

//FASE 3: elaborazione dati
//creo il loop che mi stampi i numeri da 1 a 100  
for (let i = 1; i <= 100; i++) {

//imposto la condizione per il quale stampi 'FizzBuzz' al posto dei multipli sia di 3 che di 5        
    if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
   
//imposto la condizione per il quale stampi 'Fizz' al posto dei multipli di 3
    }else if (i % 3 == 0) {
        console.log('Fizz');

//imposto la condizione per il quale stampi 'Buzz' al posto dei multipli di 5   
    }else if (i % 5 == 0) {
        console.log('Buzz');

//FASE 4: output
//stampo in console l'output dei numeri fino a 100
    }else {
        console.log(i);
        
    }
    
  }


