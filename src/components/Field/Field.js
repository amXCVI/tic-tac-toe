import React from 'react';
import CellContainer from '../Cell/CellContainer';
import { FieldBlock, FieldRow } from './Field.style';

const Field = ({ field, onClickCellAction, greenCells }) => {

    return (
        <FieldBlock>
            {field.map((i, iIndex) =>
                <FieldRow key={`row${iIndex}`}>
                    {i.map((j, jIndex) =>
                        <div
                            key={`cell${iIndex}${jIndex}`}
                            onClick={() => onClickCellAction(iIndex, jIndex)}
                        >
                            <CellContainer
                                value={j}
                                isGreen={greenCells.find((item) => item === `${iIndex}${jIndex}`)}
                            />
                        </div>
                    )}
                </FieldRow>
            )}
        </FieldBlock>
    )
}

export default Field;
