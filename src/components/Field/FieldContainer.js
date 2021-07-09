import React from 'react';
import { connect } from 'react-redux';
import { onClickCell } from '../../actions/PageActions';

import Field from './Field';

const FieldContainer = ({ field, onClickCellAction, greenCells }) => {

    return (
        <Field
            field={field}
            onClickCellAction={(i, j) => onClickCellAction(i, j)}
            greenCells={greenCells}
        />
    )
}

const mapStateToProps = store => {
    return {
        field: store.page.field,
        greenCells: store.page.greenCells
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClickCellAction: (i, j) => dispatch(onClickCell(i, j))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FieldContainer);
