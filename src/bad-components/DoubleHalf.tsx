import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoubleHalfProps {
    setDhValue: React.Dispatch<React.SetStateAction<number>>;
}

function Doubler({ setDhValue }: DoubleHalfProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue((value: number) => value * 2);
            }}
        >
            Double
        </Button>
    );
}

function Halver({ setDhValue }: DoubleHalfProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue((value: number) => value * 0.5);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue} />
            <Halver setDhValue={setDhValue} />
        </div>
    );
}
