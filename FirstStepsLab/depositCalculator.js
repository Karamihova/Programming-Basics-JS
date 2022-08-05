function solve(input){
    let depositSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let annualInterestRate= Number(input[2]);
    let totalSum = depositSum + (depositTerm * ((depositSum * annualInterestRate / 100) / 12));
    console.log(totalSum);
}

solve(["200 ",
"3 ",
"5.7 "]);