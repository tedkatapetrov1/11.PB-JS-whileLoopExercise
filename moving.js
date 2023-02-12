function moving(input) {
    let index = 0;
    let widthApt = Number(input[index]);
    index++;
    let lengthApt = Number(input[index]);
    index++;
    let heightApt = Number(input[index]);
    index++;
    let boxes = input[index];
    index++;

    let totalVolume = widthApt * lengthApt * heightApt;
    let boxesCounter = 0;

    while (boxes !== "Done") {
        boxes = Number(boxes);
        boxesCounter += boxes

        if (boxesCounter >= totalVolume) {
            let neededSpace = boxesCounter - totalVolume;
            console.log(`No more free space! You need ${neededSpace} Cubic meters more.`);
            return;
        }
        boxes = input[index];
        index++;
    }

    let freeSpace = totalVolume - boxesCounter;
    console.log(`${freeSpace} Cubic meters left.`);

}

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])



