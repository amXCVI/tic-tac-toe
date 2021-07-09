export const isEndGame = (field) => {
    if (field.find((i) => i.every((j) => j && j === i[0]))) {
        return 1;
    }
    if (field[0].find((j, jIndex) => field.every((i) => j && i[jIndex] === j))) {
        return 2;
    }
    if (field[0][0] && field.every((i, iIndex) => field[iIndex][iIndex] === field[0][0])) {
        return 3;
    }
    if (field[0][field.length - 1] && field.every((i, iIndex) => field[field.length - 1 - iIndex][iIndex] === field[0][field.length - 1])) {
        return 4;
    }
    return false;
}
