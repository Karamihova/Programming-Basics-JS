function solve(input){
    let vacationCost = Number(input[0]);
    let moneySaved = Number(input[1]);
    let spendDays = 0;
    let totalDays = 0;
    let canSaveMoney = true;
    let index = 2;
    while(true){

        if(spendDays >= 5){
            canSaveMoney = false;
            break;
        }

        if(moneySaved >= vacationCost){
            break;
        }

        let action = input[index];
        let money = Number(input[index + 1]);
        if(action === "spend"){

            spendDays++;
            if(money >= moneySaved){
                moneySaved = 0;
            } else{
                moneySaved -= money;
            }

        } else if (action === "save"){
            spendDays = 0;
            moneySaved += money;
        }
        
        totalDays++;
        index += 2;
    }

    if(canSaveMoney){
        console.log(`You saved the money for ${totalDays} days.`);
    } else{
        console.log("You can't save the money.")
        console.log(totalDays);
    }
}

solve(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])