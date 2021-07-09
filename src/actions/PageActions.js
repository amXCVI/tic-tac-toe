export const CLICK_CELL = 'CLICK_CELL';
export const RESET_GAME = 'RESET_GAME';

export const onClickCell = (i, j) => {
    return {
        type: CLICK_CELL,
        payload: {
            i: i,
            j: j,
        },
    }
}

export const onClickReset = () => {
    return {
        type: RESET_GAME
    }
}
