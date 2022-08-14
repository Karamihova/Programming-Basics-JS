function solve(input){
    let height = Number(input[0]);
    let width = Number(input[1]);
    let occupationPercentage = Number(input[2]);
    let area = 4 * height * width;
    area = Math.ceil(area - (area * 1.0 * occupationPercentage / 100));
    area = parseInt(area);
    let index = 3;

    while(true){

        if(area <= 0){
            let additional = Number(input[index]);
            if(additional > 0){
                area -= additional;
            }
            break;
        }

        let currInput = input[index];
        if(currInput === "Tired!"){
            break;
        }

        let liters = Number(currInput);
        area -= liters;

        index++;
    }

    if(area == 0){
       
        console.log("All walls are painted! Great job, Pesho!");
        
    } else if (area < 0){
        console.log(`All walls are painted and you have ${(area * -1).toFixed(0)} l paint left!`);
    } else{
        console.log(`${area.toFixed(0)} quadratic m left.`);
    }

}

solve(["2",
"3",
"25",
"6",
"7",
"5"])