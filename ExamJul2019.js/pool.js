function solve(input){
    let peopleCount = Number(input[0]);
    let entrancePrice = Number(input[1]);
    let sunbedPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let entranceTotal = peopleCount * entrancePrice;
    let umbrellaTotal = Math.ceil(peopleCount / 2) * umbrellaPrice;
    let sunbedTotal = Math.ceil(peopleCount * 75 / 100) * sunbedPrice;
    let totalSum = entranceTotal + umbrellaTotal + sunbedTotal;
    console.log(`${totalSum.toFixed(2)} lv.`);
}

solve(["100",
"8",
"6",
"4"])