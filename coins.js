function coins(input) {
    let change = Number(input[0]);

    let sumChange = Math.trunc(change * 100);
    let coinsUsed = 0;

    while (sumChange > 0) {
        if (sumChange >= 200) {
            sumChange -= 200;
        } else if (sumChange >= 100) {
            sumChange -= 100;
        } else if (sumChange >= 50) {
            sumChange -= 50;
        } else if (sumChange >= 20) {
            sumChange -= 20;
        } else if (sumChange >= 10) {
            sumChange -= 10;
        } else if (sumChange >= 5) {
            sumChange -= 5;
        } else if (sumChange >= 2) {
            sumChange -= 2;
        } else if (sumChange >= 1) {
            sumChange -= 1;
        }
        coinsUsed++;
    }
    console.log(coinsUsed);
}

coins(["1.23"]);