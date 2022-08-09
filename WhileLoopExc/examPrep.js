function solve(input){
    let unsatisfayingCount = Number(input[0]);
    let gradesCount = 0;
    let taskName = null;
    let unsatisfayingGrades = 0;
    let needBreak = false;
    let totalGrades = 0;
    let taskIndex = 1;

    while(true){

        let currName = input[taskIndex];
        let grade = Number(input[taskIndex + 1]);
        
        if(currName === "Enough"){
            break;
        }

        taskName = currName;

        if(grade <= 4){
            unsatisfayingGrades++;
        }

        gradesCount++;
        taskIndex += 2;
        totalGrades += grade;

        if(unsatisfayingGrades >= unsatisfayingCount){
            needBreak = true;
            break;
        }


    }

    if(needBreak){
        console.log(`You need a break, ${unsatisfayingGrades} poor grades.`);
    } else {

        let averageScore = totalGrades / gradesCount;
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${gradesCount}`);
        console.log(`Last problem: ${taskName}`);
    }
}

solve(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])