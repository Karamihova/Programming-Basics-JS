function solve(input){
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let moneySaved = 0;
    let toyCount = 0;
    let brotherCost = 0
    let money = 10;

    for (let i = 1; i <= age; i++) {
        if(i % 2 == 0){
            moneySaved += money;
            money += 10;
            brotherCost++;
        } else{
            toyCount++;
        }        
    }

    moneySaved -= brotherCost;
    let toysSoldPrice = toyPrice * toyCount;
    moneySaved += toysSoldPrice;
    let isMoneyEnough = moneySaved >= washingMachinePrice;
    let moneyDiff = Math.abs(moneySaved - washingMachinePrice);

    if(isMoneyEnough){
        console.log(`Yes! ${moneyDiff.toFixed(2)}`);
    } else{
        console.log(`No! ${moneyDiff.toFixed(2)}`);
    }

}

solve(["21",
"1570.98",
"3"])