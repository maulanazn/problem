function birthdayCakeCandles(candles) {
    let greatest = Number.NEGATIVE_INFINITY;
    let count = 0;

    for (let i = 0; i < candles.length; i++) {
        if (candles[i] > greatest) {
            greatest = candles[i]
        }
    }

    for (let i = 0; i < candles.length; i++) {
        if (candles[i] == greatest) {
            count += 1
        }
    }

    return count
}

console.log(birthdayCakeCandles([4,5,5,1]))