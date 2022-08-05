function solve(input){
    let annualTax = Number(input[0]);
    let shoes = annualTax - (annualTax * 40 / 100);
    let clothes = shoes - (shoes * 20 / 100);
    let ball = clothes / 4;
    let accessories = ball / 5;
    let totalCost = shoes + clothes + ball + accessories + annualTax;
    console.log(totalCost);
}

solve(["365"]);