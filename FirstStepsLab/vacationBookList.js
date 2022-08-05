function solve(input){
    let totalPages = Number(input[0]);
    let pagesReadPerHour = Number(input[1]);
    let totalDays = Number(input[2]);
    let totalHours = totalPages / pagesReadPerHour / totalDays;
    console.log(totalHours);
}

solve(["212 ",
"20 ",
"2 "]);