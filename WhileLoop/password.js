function solve(input){
    let username = input[0];
    let password = input[1];
    let index = 2;

    while (true) {

        let passwordLog = input[index];

        if(passwordLog === password){
            console.log(`Welcome ${username}!`);
            break;
        }

        index++;
    }
}

solve(["Gosho",
"secret",
"secret"])