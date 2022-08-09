function solve(input){
    let searchBook = input[0];
    let index = 1;
    let isFound = false;
    let counter = 0;
    while(true){

        let currBook = input[index];
        if(currBook === searchBook){
            isFound = true;
            break;
        }

        if(currBook === "No More Books"){
            break;
        }

        index++;
        counter++;
    }

    if(isFound){
        console.log(`You checked ${counter} books and found it.`);
    } else{
        console.log(`The book you search is not here!`);
        console.log(`You checked ${counter} books.`)
    }
}

solve(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])