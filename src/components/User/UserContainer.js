import React from 'react';
import { connect } from 'react-redux'
import { onClickReset } from '../../actions/PageActions';
import { changeGameMode } from '../../actions/UserAction'
import User from './User';

const UserContainer = ({ gameMode, onChangeGameMode, onClickResetGame }) => {

    return (
        <User
            gameMode={gameMode}
            onChangeGameMode={onChangeGameMode}
            onClickResetGame={onClickResetGame}
        />
    )
}

const mapStateToProps = store => {
    return {
        gameMode: store.user.gameMode,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeGameMode: () => dispatch(changeGameMode()),
        onClickResetGame: () => dispatch(onClickReset())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserContainer);
