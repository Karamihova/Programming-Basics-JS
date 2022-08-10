function solve(input){
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let floor = floors; floor > 0; floor--) {

        let array = [];
        for (let room = 0; room < rooms; room++) {

            if(floor === floors){
                array[room] = `L${floor}${room}`;
            }
            else if (floor % 2 == 0){
                array[room] = `O${floor}${room}`;
            }
            else{
                array[room] = `A${floor}${room}`;
            }
            
        }

        console.log(array.join(" "));
        
    }
}

solve(["6", "4"])