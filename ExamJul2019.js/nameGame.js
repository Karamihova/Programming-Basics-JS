function solve(input){

    let currInput = input.shift();
    let winnerName = "";
    let winnerPoints = 0;

    while(true){

        if(currInput === "Stop"){
            break;
        }

        let name = currInput;
        let points = 0;

        for (let i = 0; i < name.length; i++) {
            
            let number = Number(input[i]);
            let letter = name.charCodeAt(i);

            if(number === letter){
                points += 10;
            } else{
                points += 2;
            }
            
        }

        if(points >= winnerPoints){
            winnerName = name;
            winnerPoints = points;
        }

        currInput = input.shift();
    }

    console.log(`The winner is ${winnerName} with ${winnerPoints} points!`);
}

solve(["Pesho",
"124",
"34",
"111",
"97",
"99",
"Gosho",
"98",
"124",
"88",
"76",
"18",
"Stop"])
