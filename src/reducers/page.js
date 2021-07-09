import { CLICK_CELL, RESET_GAME } from "../actions/PageActions";
import { isEndGame } from "../utils/game";

const initialState = {
    field: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ],
    lastGamer: 1,
    winner: 0,
    greenCells: [],
}

export const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_CELL:
            const i = action.payload.i;
            const j = action.payload.j;

            if (state.field[i][j]) {
                return state;
            }

            const uploadedField = state.field.map((iValue, iIndex) =>
                iIndex === action.payload.i ? state.field[action.payload.i].map((jValue, jIndex) =>
                    jIndex === action.payload.j ? state.lastGamer : jValue
                ) : iValue
            );

            const endGameFlag = isEndGame(uploadedField);
            if (endGameFlag) {
                let greenCells = [];
                switch (endGameFlag) {
                    case 1:
                        const rowIndex = i;
                        greenCells = uploadedField[rowIndex].map((j, jIndex) => `${rowIndex}${jIndex}`);
                        break;
                    case 2:
                        const colIndex = j;
                        greenCells = uploadedField.map((i, iIndex) => `${iIndex}${colIndex}`);
                        break;
                    case 3:
                        greenCells = ['00', '11', '22'];
                        break;
                    case 4:
                        greenCells = ['02', '11', '20'];
                        break;

                    default:
                        break;
                }
                return {
                    ...state,
                    field: uploadedField,
                    winner: state.lastGamer,
                    lastGamer: state.lastGamer === 1 ? 2 : 1,
                    greenCells: greenCells,
                }
            }

            return {
                ...state,
                field: uploadedField,
                lastGamer: state.lastGamer === 1 ? 2 : 1
            }

        case RESET_GAME:
            return {
                ...state,
                field: [
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0],
                ],
                lastGamer: 0,
                winner: 0,
                greenCells: [],
            }
        default:
            return state
    }
}
