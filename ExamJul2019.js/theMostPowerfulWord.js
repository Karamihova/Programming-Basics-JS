function solve(input){
    let currInput = input.shift();
    let mostPowerfulWord = "";
    let mostPoints = 0;

    while(true){

        if(currInput === "End of words"){
            break;
        }

        let word = currInput;
        let points = 0;

        for (let i = 0; i < word.length; i++) {
            let letterValue = word.charCodeAt(i);
            points += letterValue;
        }

        let firstLetter = word[0];
        firstLetter = firstLetter.toUpperCase();

        if(firstLetter === "A" ||
            firstLetter === "E" ||
            firstLetter === "I" ||
            firstLetter === "O" ||
            firstLetter === "U" ||
            firstLetter === "Y" ){

                points = points * word.length;

            } else{
                points = Math.floor(points / word.length);
            }

        if(points > mostPoints){
            mostPoints = points;
            mostPowerfulWord = word;
        }

        currInput = input.shift();

    }

    console.log(`The most powerful word is ${mostPowerfulWord} - ${mostPoints}`);
}

solve(["episode",
"End of words"])