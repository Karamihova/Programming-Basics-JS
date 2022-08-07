function solve(input){
    let num = Number(input[0]);
    for (let i = 0; i <= num ; i++) {
       if(i % 2 == 0){
        console.log(Math.pow(2, i));
       }
        
    }
}

solve(["4"]);