function vacation(input) {
    let index = 0;
    let neededsum = Number(input[index]);
    index++;
    let availableSum = Number(input[index]);
    index++
    let action = input[index];
    index++;
    let sum = Number(input[index]);
    index++;

    let spendedDays = 0
    let daysCount = 0

    while (availableSum < neededsum) {
        daysCount++;

        if (action === "spend") {
            if (sum > availableSum) {
                availableSum = 0;
            } else {
                availableSum -= sum;
            }
            spendedDays++;
        } else {
            availableSum += sum;
            spendedDays = 0;
        }
        if (spendedDays === 5) {
            console.log("You can't save the money.");
            console.log(`${daysCount}`);
            return;
        }

        action = input[index];
        index++;
        sum = Number(input[index]);
        index++;
    }
    console.log(`You saved the money for ${daysCount} days.`);

}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])




