function solve(input){
    let month = input[0];
    let nights = Number(input[1]);

    let apartmentCost = 0;
    let studioCost = 0;

    if(month == "May" || month == "October"){

        apartmentCost = nights * 65;
        studioCost = nights * 50;

        if(nights > 7 && nights <= 14){
            studioCost -= studioCost * 5 / 100;
        } else if (nights > 14){
            studioCost -= studioCost * 30 / 100;
            apartmentCost -= apartmentCost * 10 / 100;
        }

    } else if(month == "June" || month == "September"){

        apartmentCost = nights * 68.7;
        studioCost = nights * 75.2;

        if(nights > 14){
            studioCost -= studioCost * 20 / 100;
            apartmentCost -= apartmentCost * 10 / 100;
        }

    } else if (month == "July" || month == "August"){

        apartmentCost = nights * 77;
        studioCost = nights * 76;

        if(nights > 14){
            apartmentCost -= apartmentCost * 10 / 100;
        }

    }

    console.log(`Apartment: ${apartmentCost.toFixed(2)} lv.`);
    console.log(`Studio: ${studioCost.toFixed(2)} lv.`);
}

solve(["June",
"14"])