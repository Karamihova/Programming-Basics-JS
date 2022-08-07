function solve(input){
    let projectionType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);
    let income = 0;

    if (projectionType == "Premiere") {
        income = rows * cols * 12;
    } else if (projectionType == "Normal"){
        income = rows * cols * 7.5;
    } else if (projectionType == "Discount"){
        income = rows * cols * 5;
    }

    console.log(`${income.toFixed(2)} leva`)
}

solve(["Premiere",
"10",
"12"])