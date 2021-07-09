import React from 'react';
import { ResetButton, Switcher } from './User.style';

const User = ({ gameMode, onChangeGameMode, onClickResetGame }) => {

    return (
        <>
            <Switcher>
                <input type="checkbox" id="toggle" />
                <div>
                    <label htmlFor="toggle"></label>
                </div>
            </Switcher>
            <ResetButton onClick={onClickResetGame}>resetGame</ResetButton>
        </>
    )
}

export default User;
