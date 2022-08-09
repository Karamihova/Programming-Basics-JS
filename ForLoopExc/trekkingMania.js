function solve(input){
    let groups = Number(input[0]);
    let musalaClimbers = 0;
    let monblanClimbers = 0;
    let cilimandjaroClimbers = 0;
    let k2Climbers = 0;
    let everestClimbers = 0;
    let totalClimbers = 0;
    for (let i = 1; i <= groups; i++) {

        let currGroup = Number(input[i])

        totalClimbers += currGroup;

        if(currGroup <= 5){
            musalaClimbers += currGroup;
        } else if(currGroup >= 6 && currGroup <= 12){
            monblanClimbers += currGroup;
        } else if (currGroup >= 13 && currGroup <= 25){
            cilimandjaroClimbers += currGroup;
        } else if (currGroup >= 26 && currGroup <= 40){
            k2Climbers += currGroup;
        } else if (currGroup >= 41){
            everestClimbers += currGroup;
        }
    }

    musalaClimbers = musalaClimbers / totalClimbers * 100;
    monblanClimbers = monblanClimbers / totalClimbers * 100;
    cilimandjaroClimbers = cilimandjaroClimbers / totalClimbers * 100;
    k2Climbers = k2Climbers / totalClimbers * 100;
    everestClimbers = everestClimbers / totalClimbers * 100;

    console.log(`${musalaClimbers.toFixed(2)}%`);
    console.log(`${monblanClimbers.toFixed(2)}%`);
    console.log(`${cilimandjaroClimbers.toFixed(2)}%`);
    console.log(`${k2Climbers.toFixed(2)}%`);
    console.log(`${everestClimbers.toFixed(2)}%`);
}

solve(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])