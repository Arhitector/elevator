import styled from '@emotion/styled';
import { FLOOR_HEIGHT, ELEVATOR_SPEED, ELEVATOR_DOOR_SPEED } from '../../vars';

export const ElevatorContainer = styled.div<{ floor: number }>`
  width: ${`${FLOOR_HEIGHT*0.75}px`};
  height: ${`${FLOOR_HEIGHT}px`};
  background-color: #808080;
  border: 3px solid #333;
  position: relative;
  border-radius: 2%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: ${({floor}) => `${floor * FLOOR_HEIGHT}px`};
  transition: bottom ${ELEVATOR_SPEED}ms cubic-bezier(0.42, 0, 0.58, 1);
  overflow: hidden;
`;

export const Door = styled.div<{ position: string, isOpen: boolean }>`
  width: 35%;
  height: 90%;
  background-color: #BBBBBB;
  position: absolute;
  transition: transform ${ELEVATOR_DOOR_SPEED/3}ms ease;
  transform: ${({ isOpen, position }) =>
    isOpen ? (position === 'left' ? 'translateX(-125%)' : 'translateX(125%)') : 'translateX(0%)'};
`;

