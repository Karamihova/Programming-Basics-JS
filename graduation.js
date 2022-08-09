function solve(input){
    let student = input[0];
    let index = 1;
    let warning = 0;
    let isExcluded = false;
    let marks = 0;
    while(true){

        let grade = Number(input[index]);
        if(grade < 4.00){
            warning++;
        }

        if(warning >= 2){
            isExcluded = true;
            break;
        }

        if(index > 12){
            break;
        }

        marks += grade;
        index++;
    }

    if(isExcluded){
        console.log(`${student} has been excluded at ${index-1} grade`)
    } else{
        let averageGrade = marks / 12;
        console.log(`${student} graduated. Average grade: ${averageGrade.toFixed(2)}`)
    }
}

solve(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])