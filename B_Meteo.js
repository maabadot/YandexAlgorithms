const data = [
    [1, 1],
    [0, 1],
    [1, 0],
    [1, 1],
    [0, 1]
]

const meteo = (diffs) => {
    let xSum = 0;
    let ySum = 0;

    // Найдем суммы единиц по координатам x и y
    diffs.forEach(diff => {
        xSum = diff[0] ? (xSum + 1) : xSum;
        ySum = diff[1] ? (ySum + 1) : ySum;
    });

    // Вернуться в начальное положение можно, только если
    // каждая из суммы координат чётна
    if (xSum % 2 == 0 && ySum % 2 == 0) {
        // Счетчики измененных координат
        let xCount = 0;
        let yCount = 0;

        // Проходимся по массиву, меняем половину координат на -1
        diffs.forEach(diff => {
            if (diff[0] && xCount < xSum / 2) {
                diff[0] = -diff[0];
                xCount++;
            }
            if (diff[1] && yCount < ySum / 2) {
                diff[1] = -diff[1];
                yCount++;
            }
        });

        return diffs;
    } 
    else {
        return null;
    }
}

console.log(meteo(data));