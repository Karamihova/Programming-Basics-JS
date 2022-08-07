function solve(input){
    let examHour = Number(input[0]);
    let examMins = -1;

    if(input[1] == "00"){
        examMins = 0;
    } else if(input[1] == "01"){
        examMins = 1;
    } else if(input[1] == "02"){
        examMins = 2;
    } else if(input[1] == "03"){
        examMins = 3;
    } else if(input[1] == "04"){
        examMins = 4;
    } else if(input[1] == "05"){
        examMins = 5;
    } else if(input[1] == "06"){
        examMins = 6;
    } else if(input[1] == "07"){
        examMins = 7;
    } else if(input[1] == "08"){
        examMins = 8;
    } else if(input[1] == "09"){
        examMins = 9;
    } else{
        examMins = Number(input[1]);
    }

    let arrivalHour = Number(input[2]);
    let arrivalMins = -1;

    if(input[3] == "00"){
        arrivalMins = 0;
    } else if(input[3] == "01"){
        arrivalMins = 1;
    } else if(input[3] == "02"){
        arrivalMins = 2;
    } else if(input[3] == "03"){
        arrivalMins = 3;
    } else if(input[3] == "04"){
        arrivalMins = 4;
    } else if(input[3] == "05"){
        arrivalMins = 5;
    } else if(input[3] == "06"){
        arrivalMins = 6;
    } else if(input[3] == "07"){
        arrivalMins = 7;
    } else if(input[3] == "08"){
        arrivalMins = 8;
    } else if(input[3] == "09"){
        arrivalMins = 9;
    } else{
        arrivalMins = Number(input[3]);
    }

    let text = null;
    let differenceMins = -1;
    let differenceHours = -1;

    if (examHour == arrivalHour) {
        if(arrivalMins <= examMins){
            differenceMins = examMins - arrivalMins;
            if(differenceMins <= 30){
                text = "On time";
            }
            else{
                text = "Early";
            }
        } else{
            differenceMins = arrivalMins - examMins;
            text = "Late";
        }
    } else {
        if(examHour > arrivalHour){
            differenceHours = examHour - arrivalHour;
            differenceMins = Math.abs(arrivalMins - examMins);
            text = "Early";
        } else{
            differenceHours = arrivalHour - examHour;
            differenceMins = Math.abs(arrivalMins - examMins);
            text = "Late";
        }
    }

    differenceHours -= 1;
    console.log(text);
    if(differenceHours == -1 || differenceHours == 0){
        if(text == "On time" || text == "Early"){
            console.log(`${differenceMins} minutes before the start`);
        } else{
            console.log(`${differenceMins} minutes after the start`);
        }
    } else{
        if(text == "On time" || text == "Early"){
            console.log(`${differenceHours}:${differenceMins} minutes before the start`);
        } else{
            console.log(`${differenceHours}:${differenceMins} minutes after the start`);
        }
    }
}

solve(["9",
"00",
"8",
"30"])