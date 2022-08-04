function calculate(input){
    let dogPackages = Number(input[0]);
    let catPackages = Number(input[1]);
    let totalSum = (dogPackages * 2.5) + (catPackages * 4);
    console.log(`${totalSum} lv.`);
}

calculate(["5 ",
"4 "]);