function solve(input){
    let wantedIncome = Number(input[0]);
    let income = 0;
    let isEnough = false;
    let index = 1;
    while(true){
        if(income >= wantedIncome){
            isEnough = true;
            break;
        }

        let currInput = input[index];
        if(currInput === "Party!"){
            break;
        } 

        let cocktail = currInput;
        let quantity = Number(input[index + 1]);

        let cocktailPrice = cocktail.length;
        let cocktailTotal = cocktailPrice * quantity;
        let num = cocktailTotal % 10;

        if(num % 2 != 0){
            cocktailTotal -= cocktailTotal * 25 / 100;
        } 

        income += cocktailTotal;

        index += 2;
    }

    let diff = Math.abs(wantedIncome - income);
    if(isEnough){
        console.log("Target acquired.");
    }
    else{
        console.log(`We need ${diff.toFixed(2)} leva more.`);
    }

    console.log(`Club income - ${income.toFixed(2)} leva.`);
}

solve(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"]);