import { useEffect, useState } from "react"
import Elevator from '../elevator'
import { ELEVATOR_SPEED, ELEVATOR_DOOR_SPEED } from '../../vars'
import {
  ConstructionContainer,
  Construction,
  Floor,
  Elevators,
} from './styles';

interface ElevatorState {
  floor: number;
  available: boolean;
}

export default function Building({floors, elevatorsAmount}) {
  const [elevators, setElevators] = useState<ElevatorState[]>(new Array(elevatorsAmount).fill({
    floor: 0,
    available: true,
  }))

  const [queue, setQueue] = useState<number[]>([]);

  const findAvailableElevator = () => elevators.some(e => e.available)

  const nearestElevator = (floor: number): number => {
    return elevators.reduce((nearest, cur, index, arr) => {
      if (!cur.available) return nearest;
      const nearestFloor = nearest === -1 ? -1 : arr[nearest].floor;
      const nearestDiff = Math.abs(nearestFloor - floor);
      const currentDiff = Math.abs(cur.floor - floor);
      return nearest === -1 || currentDiff < nearestDiff ? index : nearest;
    }, -1);
  }

  const handleFloorClick = (floor: number) => {
    const nearestElevatorIndex = nearestElevator(floor);
    const elevatorCb = (obj: Partial<ElevatorState>) => 
      (elev: ElevatorState, idx: number): ElevatorState => 
        idx === nearestElevatorIndex ? { ...elev, ...obj } : elev
    
    if (nearestElevatorIndex !== -1) {
      setElevators(prev => prev.map(elevatorCb({floor, available: false})))
      setTimeout(() => {
        setElevators(prev => prev.map(elevatorCb({available: true})))
      }, ELEVATOR_SPEED + ELEVATOR_DOOR_SPEED);
      return true;
    }
    return false;
  };

  const processQueue = () => {
    if (queue.length > 0 && findAvailableElevator()) {
      const [first, ...rest] = queue;
      const success = handleFloorClick(first);
      if (success) {
        setQueue(rest);
      }
    }
  };

  useEffect(() => {
    processQueue();
  }, [queue, elevators]);

  const addFloorToQueue = (floor: number) => setQueue(prev => [...prev, floor]);

  return (
    <>
      <ConstructionContainer key={'123'} >
        <Construction>
          {Array.from({ length: floors }, (_, i) => (
            <Floor key={i} amount={elevatorsAmount} onClick={() => addFloorToQueue(i)}>
              <span>{i + 1}</span>
            </Floor>
          ))}
        </Construction>
        <Elevators amount={elevatorsAmount} >
          {Array.from({ length: elevatorsAmount }, (_, j) => (
            <Elevator key={j} floor={elevators[j].floor} ></Elevator>
          ))}
        </Elevators>
      </ConstructionContainer>
    </>
  )
}
