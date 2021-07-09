import React from 'react';
import Cell from './Cell';

const CellContainer = ({ value, isGreen }) => {

    return (
        <Cell value={value} isGreen={isGreen} />
    )
}

export default CellContainer;
