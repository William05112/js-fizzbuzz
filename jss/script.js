
// Ciclo for per numeri crescenti da 1 a 100 e all'interno il ciclo if con le 3 condizioni per stampare Fizz, Buzz o FizzBuzz

for ( let i = 1; i <= 100; i++){
    if ( i % 3 ===0 && i % 5 === 0){
        console.log(`${i} FizzBuzz`);
        
    }else if ( i % 3 === 0){
        console.log(`${i} Fizz`);
    }else if ( i % 5 === 0){
        console.log(`${i} Buzz`);

    }else{
        console.log(i);
    }
        
        

    

}


