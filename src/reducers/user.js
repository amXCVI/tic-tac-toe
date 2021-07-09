import { CHANGE_GAME_MODE } from "../actions/UserAction";

const initialState = {
    name: 'Аноним',
    gameMode: 'computer'
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_GAME_MODE:
            return { ...state, gameMode: state.gameMode === 'computer' ? 'user' : 'computer' }

        default:
            return state
    }
}
