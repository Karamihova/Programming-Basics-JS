function solve(input){
    let protection = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let workingHours = Number(input[3]);

    protection = protection + 2;
    let bags = 0.4;
    let extraPaint = paint * 10 / 100;
    paint += extraPaint;
    let materialCost = (protection * 1.5) + (paint * 14.5) + (paintThinner * 5) + bags;
    let workPerHourCost = materialCost * 30 / 100;
    let totalWorkCost = workPerHourCost * workingHours;
    let totalCost = materialCost + totalWorkCost;
    console.log(totalCost);
}

solve(["5 ",
"10 ",
"10 ",
"1 "]);