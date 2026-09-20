import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState(1);
    const [rightDie, setRightDie] = useState(6);

    const rollLeft = () => {
        setLeftDie(d6());
    };

    const rollRight = () => {
        setRightDie(d6());
    };

    const snakeEyes = leftDie === 1 && rightDie === 1;
    const win = leftDie === rightDie && !snakeEyes;

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>{" "}
            <span data-testid="right-die">{rightDie}</span>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            {snakeEyes && <p>Lose</p>}
            {win && <p>Win</p>}
        </div>
    );
}
