function solve(input){
    let examHour = Number(input[0]);
    let examMins = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMins = Number(input[3]);

    let examTotal = (examHour * 60) + examMins;
    let arrivalTotal = (arrivalHour * 60) + arrivalMins;
    let time = null;
    let difference = Math.abs(arrivalTotal - examTotal);
    if(arrivalTotal <= examTotal){
        if(difference <= 30){
            time = "On time";
        } else{
            time = "Early";
        }
    } else{
        time = "Late";
    }

    let leftHours = Math.floor(difference / 60);
    let leftMins = difference % 60;
    let beforeOrAfter = null;
    console.log(time);

    if(time == "Late"){
        beforeOrAfter = "after"
     }else{
         beforeOrAfter = "before"
     }

     if(leftHours == 0 && leftMins == 0){
        
    } else if(leftHours <= 0){
        console.log(`${leftMins} minutes ${beforeOrAfter} the start`)
    } else{
        if(leftMins > 9){
            console.log(`${leftHours}:${leftMins} hours ${beforeOrAfter} the start`);
        } else{
            console.log(`${leftHours}:0${leftMins} hours ${beforeOrAfter} the start`);
        }
    }
}

solve(["10",
"00",
"10",
"00"])
