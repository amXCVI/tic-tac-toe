import styled from 'styled-components'

export const CellBlock = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    background: ${props => props.isGreen ? 'green' : 'white'};
`;
