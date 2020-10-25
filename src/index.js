
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if (!matrix) {
        return arr;
    } else if (matrix.length === 0) {
        return arr;
    } else {
        matrix.forEach((element , i) => {
            if (!(i % 2 === 0)) {
                element.reverse().forEach(item => {
                    arr.push(item);
                })
            } else {
                element.forEach(item => {
                    arr.push(item);
                })
            }
        });
        return arr;
    }
}
