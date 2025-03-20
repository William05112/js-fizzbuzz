
// Ciclo for per numeri crescenti da 1 a 100 e all'interno il ciclo if con le 3 condizioni per stampare Fizz, Buzz o FizzBuzz

for ( let i = 1; i <= 100; i++){
    let stampa ;
    if ( i % 3 ===0 && i % 5 === 0){
        stampa = "FizzBuzz";
        
    }else if ( i % 3 === 0){
        stampa = "Fizz"; ;
    }else if ( i % 5 === 0){
        stampa = "Buzz";

    }else{
        stampa = i;
    }
    console.log(stampa);
    
        
        

    

}


