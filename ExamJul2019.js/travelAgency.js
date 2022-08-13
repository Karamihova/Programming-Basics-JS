function solve(input){
    let town = input[0];
    let packetType = input[1];
    let vipDiscount = input[2];
    let days = Number(input[3]);

    let dayPrice = 0;
    let discount = 0;
    let isInvalid = false;

    
    if(town === "Bansko" || town === "Borovets"){

        if(packetType === "withEquipment"){

            dayPrice = 100;
            if(vipDiscount === "yes"){
                discount = 10;
            }

        } else if(packetType === "noEquipment"){

            dayPrice = 80;
            if(vipDiscount === "yes"){
                discount = 5;
            }

        } else{

            isInvalid = true;
            console.log("Invalid input!");

        }

    } else if(town === "Varna" || town === "Burgas"){

        if(packetType === "withBreakfast"){
            dayPrice = 130;
            if(vipDiscount === "yes"){
                discount = 12;
            }

        } else if(packetType === "noBreakfast"){

            dayPrice = 100;
            if(vipDiscount === "yes"){
                discount = 7;
            }

        } else{

            isInvalid = true;
            console.log("Invalid input!");

        }

    } else{

        isInvalid = true;
        console.log("Invalid input!");

    }

    if(days < 1){

        isInvalid = true;
        console.log("Days must be positive number!");
        
    }

    if(days > 7){
        days--;
    }

    if(!isInvalid){

        if(discount > 0){
            dayPrice -= dayPrice * discount / 100;
        }
    
        
        let totalSum = days * dayPrice;
        console.log(`The price is ${totalSum.toFixed(2)}lv! Have a nice time!`);
    }
    
}

solve(["Borovets",
"noEquipment",
"yes",
"6"])