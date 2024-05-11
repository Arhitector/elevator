import { useState } from "react"
import Building from '../building'
import BuildingForm, { BuildingConfig } from '../buildingForm';
import { Wrapper, BuildingWrapper } from './styles'

export default function Build() {
    const [config, setConfig] = useState<BuildingConfig[]>([]);

    const addBuilding = (newBuilding: BuildingConfig) => setConfig(prevConfig => [...prevConfig, newBuilding]);

    return (
        <Wrapper>
            <BuildingForm addBuilding={addBuilding} />
            <BuildingWrapper>
                {config.map((el) => <Building key={el.idx} {...el} /> )}
            </BuildingWrapper>
        </Wrapper>
    )
}
