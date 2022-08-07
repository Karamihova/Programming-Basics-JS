function solve(input){
    let budget = Number(input[0]);
    let season = input[1];
    let place = null;
    let totalCost = 0;
    let placeType = null;

    if(budget <= 100){
        place = "Bulgaria";
        if(season == "summer"){
            totalCost = budget * 30 / 100;
        } else{
           totalCost = budget * 70 / 100;
        }
    } else if (budget > 100 && budget <= 1000){
        place = "Balkans";
        if(season == "summer"){
            totalCost = budget * 40 / 100;
        } else{
           totalCost = budget * 80 / 100;
        }
    } else {
        place = "Europe";
        totalCost = budget * 90 / 100;
    }

    if(place == "Europe" || season == "winter"){
        placeType = "Hotel"
    } else if (season == "summer"){
        placeType = "Camp"
    }

    console.log(`Somewhere in ${place}`);
    console.log(`${placeType} - ${totalCost.toFixed(2)}`);
    
}

solve(["75", "winter"])