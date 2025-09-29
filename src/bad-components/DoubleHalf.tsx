import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoublerProps {
    onDouble: () => void;
}
interface HalverProps {
    onHalf: () => void;
}

function Doubler({ onDouble }: DoublerProps): React.JSX.Element {
    return <Button onClick={onDouble}>Double</Button>;
}

function Halver({ onHalf }: HalverProps): React.JSX.Element {
    return <Button onClick={onHalf}>Halve</Button>;
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    const onDouble = () => {
        setDhValue(dhValue * 2);
    };
    const onHalf = () => {
        setDhValue(dhValue * 0.5);
    };
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler onDouble={onDouble}></Doubler>
            <Halver onHalf={onHalf}></Halver>
        </div>
    );
}
