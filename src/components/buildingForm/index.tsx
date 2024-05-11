import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Form } from './styles';

export interface BuildingConfig {
    idx: number;
    floors: number;
    elevatorsAmount: number;
}

interface BuildingFormProps {
    addBuilding: (building: BuildingConfig) => void;
  }
  
export default function BuildingForm({ addBuilding }: BuildingFormProps) {
    const [floors, setFloors] = useState("");
    const [elevators, setElevators] = useState("");
  
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const newBuilding = {
            idx: uuidv4(),
            floors: parseInt(floors, 10),
            elevatorsAmount: parseInt(elevators, 10)
        };
        addBuilding(newBuilding);
        setFloors("");
        setElevators("");
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="floors">Floors:</label>
          <input
            type="number"
            id="floors"
            value={floors}
            onChange={e => setFloors(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="elevators">Elevators:</label>
          <input
            type="number"
            id="elevators"
            value={elevators}
            onChange={e => setElevators(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Building</button>
      </Form>
    );
  }
  