function solve(input){
    let pensPackages = Number(input[0]);
    let markerPackages = Number(input[1]);
    let cleaningLitres = Number(input[2]);
    let discount = Number(input[3]);
    let sum = (pensPackages * 5.8) + (markerPackages * 7.2) + (cleaningLitres * 1.2);
    let finalSum = sum - (sum * discount / 100);
    console.log(finalSum);
}

solve(["2 ",
"3 ",
"4 ",
"25 "]);