function calculate(input){
    let name = input[0];
    let projectsCount = Number(input[1]);
    let projectsHours = projectsCount * 3;
    let text = `The architect ${name} will need ${projectsHours} hours to complete ${projectsCount} project/s.`;
    console.log(text);
}

calculate(["Sanya ",
"9 "]
);