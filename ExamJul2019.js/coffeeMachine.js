function solve(input){
    let beverageType = input[0];
    let sugarQuantity = input[1];
    let beverageCount = Number(input[2]);
    let noSugar = false;
    let beveragePrice = 0;

    switch (beverageType) {
        case "Espresso":
            switch (sugarQuantity) {
                case "Without":
                    noSugar = true;
                    beveragePrice = 0.9;
                    break;
                case "Normal":
                    beveragePrice = 1;
                    break;
                case "Extra":
                    beveragePrice = 1.2;
                    break;
                default:
                    break;
            }
            break;
        case "Cappuccino":
            switch (sugarQuantity) {
                case "Without":
                    noSugar = true;
                    beveragePrice = 1;
                    break;
                case "Normal":
                    beveragePrice = 1.2;
                    break;
                case "Extra":
                    beveragePrice = 1.6;
                    break;
                default:
                    break;
            }
            break;
        case "Tea":
            switch (sugarQuantity) {
                case "Without":
                    noSugar = true;
                    beveragePrice = 0.5;
                    break;
                case "Normal":
                    beveragePrice = 0.6;
                    break;
                case "Extra":
                    beveragePrice = 0.7;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }

    let totalSum = beverageCount * beveragePrice;
    if(noSugar){
        totalSum -= totalSum * 35 / 100;
    }    

    if(beverageType === "Espresso" && beverageCount >= 5){
        totalSum -= totalSum * 25 / 100;
    }

    if(totalSum > 15){
        totalSum -= totalSum * 20 / 100;
    }

    console.log(`You bought ${beverageCount} cups of ${beverageType} for ${totalSum.toFixed(2)} lv.`)

}

solve(["Tea",
"Extra",
"3"])