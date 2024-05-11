import React, {useEffect, useState} from 'react';
import { ELEVATOR_DOOR_SPEED, ELEVATOR_SPEED } from '../../vars';
import {
    ElevatorContainer,
    Door,
} from './styles';

interface ElevatorProps {
    floor?: number;
}

const Elevator: React.FC<ElevatorProps> = ({ floor = 0 }) => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsOpen(true);
            const innerTimeoutId = setTimeout(() => {
                setIsOpen(false);
            }, ELEVATOR_DOOR_SPEED);

            return () => clearTimeout(innerTimeoutId);
        }, ELEVATOR_SPEED);

        return () => clearTimeout(timeoutId);
    }, [floor]);

    return (
        <ElevatorContainer floor={floor}>
            <Door position="left" isOpen={isOpen} />
            <Door position="right" isOpen={isOpen} />
        </ElevatorContainer>
    );
}

export default Elevator;
