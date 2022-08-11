function solve(input){
    let n = Number(input[0]); // jury count
    let currInput = "";
    let index = 1;
    let presentation = "";
    let count = 0;
    let totalAverage = 0;

    while(true){

        currInput = input[index];

        if(currInput == "Finish"){
            break;
        }

        let presentationAverage = 0;
        presentation = currInput;

        for (let i = 0; i < n; i++) {
            let numberIndex = index + 1 + i;
            let grade = Number(input[numberIndex]);
            presentationAverage += grade;
            totalAverage += grade;
            count++;            
        }

        presentationAverage = presentationAverage / n;
        console.log(`${presentation} - ${presentationAverage.toFixed(2)}.`);
        index += n + 1;

    }

    totalAverage = totalAverage / count;
    console.log(`Student's final assessment is ${totalAverage.toFixed(2)}.`);

}

solve(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])