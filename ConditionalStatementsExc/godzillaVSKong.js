function solve(input){
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    clothingPricePerPerson = Number(input[2]);

    let decor = budget * 10 / 100;
    let statistsClothiing = clothingPricePerPerson * statists;
    if(statists > 150){
        statistsClothiing = statistsClothiing - (statistsClothiing * 10 / 100);
    }

    let totalCost = statistsClothiing + decor;
    let isEnoughMoney = budget >= totalCost;
    let moneyLeft = Math.abs(budget - totalCost);
    if(isEnoughMoney){

        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);

    } else{

        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyLeft.toFixed(2)} leva more.`);
    }
}

solve(["9587.88",
"222",
"55.68"]);
