function solve(input){
    let destination = null;
    let budget = 0;
    let index = 0;

    while(true){

        destination = input[index];
        if(destination === "End"){
            break;
        }

        budget = Number(input[index + 1]);

        while(true){
            let moneySaved = Number(input[index + 2]);
            budget -= moneySaved;

            if(budget <= 0){
                console.log(`Going to ${destination}!`);
                index = index + 2;
                break;
            }
            index++;

        }

        index++;
    }
}

solve(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

