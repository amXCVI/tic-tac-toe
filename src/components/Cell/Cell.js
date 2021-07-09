import React from 'react';
import { CellBlock } from './Cell.style';

const Cell = ({ value, isGreen }) => {

    return (
        <CellBlock isGreen={isGreen}>{value}</CellBlock>
    )
}

export default Cell;
