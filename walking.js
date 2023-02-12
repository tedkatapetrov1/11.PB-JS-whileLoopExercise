function walking(input) {
    let index = 0;
    let steps = input[index];
    index++;

    let stepsCount = 0;

    while (steps !== "Going home") {
        steps = Number(steps);
        stepsCount += steps;
        if (stepsCount >= 10000) {
            let difference = stepsCount - 10000;
            console.log(`Goal reached! Good job!`);
            console.log(`${difference} steps over the goal!`);
            return;
        }
        steps = input[index];
        index++;
    }

    steps = Number(input[index]);
    index++;
    stepsCount += steps;
    if (stepsCount <= 10000) {
        let neededSteps = 10000 - stepsCount;
        console.log(`${neededSteps} more steps to reach goal.`);
    } else {
        let moreSteps = stepsCount - 10000;
        console.log(`Goal reached! Good job!`);
        console.log(`${moreSteps} steps over the goal!`);
    }
}

walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"])












