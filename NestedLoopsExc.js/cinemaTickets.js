function solve(input){
    let movie = "";
    let capacity = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;
    let index = 0;
    
    while(true){
        let currInput = input[index];

        if(currInput === "Finish"){
            break;
        }

        let count = 0;
        movie = currInput;
        capacity = Number(input[index + 1]);
        let currTicket = "";
        let movieTickets = 0;

        while(true){

            currTicket = input[index + 2];
            if(currTicket === "End"){
                index++;
                break;
            }

            if(capacity <= 0){
                break;
            }

            if(currTicket === "student"){
                studentTickets++;
            } else if (currTicket === "standard"){
                standardTickets++;
            } else if (currTicket === "kid"){
                kidsTickets++;
            }

            movieTickets++;
            capacity--;
            index++;
        }

        let occupiedCapacity = movieTickets / (capacity + movieTickets) * 100;
        console.log(`${movie} - ${occupiedCapacity.toFixed(2)}% full.`)
        index += 2;
    }

    let totalTickets = standardTickets + studentTickets + kidsTickets;
    studentTickets = studentTickets / totalTickets * 100;
    standardTickets = standardTickets / totalTickets * 100;
    kidsTickets = kidsTickets / totalTickets * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentTickets.toFixed(2)}% student tickets.`);
    console.log(`${standardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${kidsTickets.toFixed(2)}% kids tickets.`);
}

solve(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])