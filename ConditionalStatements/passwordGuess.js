function solve(input){
    let password = input[0];
    let phrase = "s3cr3t!P@ssw0rd";
    if(password == phrase){
        console.log("Welcome")
    } else{
        console.log("Wrong password!")
    }
}

solve(["s3cr3t!P@ssw0rd"]);