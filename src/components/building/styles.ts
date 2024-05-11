import styled from '@emotion/styled';
import { FLOOR_HEIGHT } from '../../vars';

const elevatorsSpace = ({ amount }: {amount: number}) => (amount * FLOOR_HEIGHT * 0.75) + amount * 8;

export const ConstructionContainer = styled.div`
    display: flex;
    align-items: flex-end;
    position: relative;
    background-color: #CBCBCB;
    width: 100%;
    margin-right: 10px;
    span {
        display: flex;
        justify-content: center;
        border: 1px solid #000;
        border-radius: 50%;
        background-color: #000055;
        width: 1rem;
        height: 1rem;
        line-height: 1;
        padding: 0.25rem;
        cursor: pointer;
        &:hover {
            filter: brightness(200%);
        }
    }
`;

export const Construction = styled.div`
    display: flex;
    flex-direction: column-reverse;
`;

export const Floor = styled.div<{ amount: number }>`
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
    box-sizing: border-box;
    height: ${FLOOR_HEIGHT}px;
    padding-right: ${elevatorsSpace}px;
`;

export const Elevators = styled.div<{ amount: number }>`
    display: flex;
    position: absolute;
    right: 0;
    justify-content: space-around;
    width: ${elevatorsSpace}px;
`;