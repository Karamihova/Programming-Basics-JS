function solve(input){

    let balls = Number(input.shift());

    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let blackBalls = 0;
    let otherColorBalls = 0;
    let totalPoints = 0;

    for (let i = 0; i < balls; i++) {

        let currBall = input.shift();
        switch (currBall) {
            case "red":
                totalPoints += 5;
                redBalls++;
                break;
            case "orange":
                totalPoints += 10;
                orangeBalls++;
                break;
            case "yellow":
                totalPoints += 15;
                yellowBalls++;
                break;
            case "white":
                totalPoints += 20;
                whiteBalls++;
                break;
            case "black":
                totalPoints = Math.floor(totalPoints / 2);
                blackBalls++;
                break;
            default:
                otherColorBalls++;
                break;
        }
        
    }

    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherColorBalls}`);
    console.log(`Divides from black balls: ${blackBalls}`);
}

solve(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])