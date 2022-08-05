function solve(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volume = (lenght * width * height) / 1000;
    let tankVolume = volume - (volume * percent / 100);
    console.log(tankVolume);
}

solve(["85 ",
"75 ",
"47 ",
"17 "]);