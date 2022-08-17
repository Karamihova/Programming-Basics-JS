function solve(input){

    let bestPlayer = "";
    let mostGoals = 0;
    let isHatTrick = false;
    let currInput = input.shift();

    while(true){

        if(currInput === "END"){
            break;
        }

        let currPlayer = currInput;
        let playerGoals = Number(input.shift());

        if(playerGoals > mostGoals){
            mostGoals = playerGoals;
            bestPlayer = currPlayer;
        }

        if(playerGoals >= 10){
            break;
        }

        currInput = input.shift();
    }

    if(mostGoals >= 3){
        isHatTrick = true;
    }

    console.log(`${bestPlayer} is the best player!`)
    if(isHatTrick){
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    } else{
        console.log(`He has scored ${mostGoals} goals.`);
    }

}

solve(["Petrov",
"2",
"Drogba",
"11"])