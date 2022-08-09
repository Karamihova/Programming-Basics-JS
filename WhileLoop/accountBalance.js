function solve(input){

    let balance = 0;
    let index = 0;
    let currInput = null;

    while(true){

        currInput = input[index];

        if(currInput == "NoMoreMoney"){
            break;
        }

        let increase = Number(currInput);

        if(increase < 0){
            console.log("Invalid operation!");
            break;
        }

        balance += increase;
        console.log(`Increase: ${increase.toFixed(2)}`);
        index++;
    }

    console.log(`Total: ${balance.toFixed(2)}`);
}

solve(["120",
"45.55",
"-150"])