function solve(input){
    let joineryCount = Number(input.shift());
    let joinerySize = input.shift();
    let delivery = input.shift();

    if(joineryCount < 10){

        console.log("Invalid order");

    } else {

        let totalPrice = 0;
        let discountPercentage = 0;

        if(joinerySize === "90X130"){

            totalPrice = 110 * joineryCount;
            if(joineryCount > 30 && joineryCount <= 60){
                discountPercentage = 5;
            } else if (joineryCount > 60){
                discountPercentage = 8;
            }

        } else if(joinerySize === "100X150"){

            totalPrice = 140 * joineryCount;

            if(joineryCount > 40 && joineryCount <= 80){
                discountPercentage = 6;
            } else if (joineryCount > 80){
                discountPercentage = 10;
            }

        } else if(joinerySize === "130X180"){

            totalPrice = 190 * joineryCount;

            if(joineryCount > 20 && joineryCount <= 50){
                discountPercentage = 7;
            } else if (joineryCount > 50){
                discountPercentage = 12;
            }

        } else if (joinerySize === "200X300"){

            totalPrice = 250 * joineryCount;

            if(joineryCount > 25 && joineryCount <= 50){
                discountPercentage = 9;
            } else if (joineryCount > 50){
                discountPercentage = 14;
            }

        }

        totalPrice -= totalPrice * discountPercentage / 100;

        if(delivery === "With delivery"){
            totalPrice += 60;
        }

        if(joineryCount > 99){
            totalPrice -= totalPrice * 4 / 100;
        }

        console.log(`${totalPrice.toFixed(2)} BGN`);
    }


}

solve(["2",
"130X180",
"With delivery"])