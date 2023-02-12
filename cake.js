function cake(input) {
    let index = 0;

    let widthCake = Number(input[index]);
    index++;
    let lengthCake = Number(input[index]);
    index++;
    let totalVolume = widthCake * lengthCake;

    let piecesTaken = input[index];
    index++;
    let piecesCounter = 0;

    while (piecesTaken !== "STOP" || totalVolume == 0) {
        piecesTaken = Number(piecesTaken);
        piecesCounter += piecesTaken;
        if (piecesCounter > totalVolume) {
            let neededPieces = piecesCounter - totalVolume;
            console.log(`No more cake left! You need ${neededPieces} pieces more.`);
            return;
        }
        piecesTaken = input[index];
        index++;
    }
    let leftPieces = totalVolume - piecesCounter;
    console.log(`${leftPieces} pieces are left.`);
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

