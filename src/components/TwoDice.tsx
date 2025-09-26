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
// function makeInitialPair(): [number, number] {
//     const first = d6();
//     let second = d6();
//     if (second === first) {
//         second = (first % 6) + 1;
//     }
//     return [first, second];
// }

export function TwoDice(): React.JSX.Element {
    const [left, setLeft] = useState<number>(0);
    const [right, setRight] = useState<number>(1);
    const rollLeft = () => {
        setLeft(d6());
    };
    const rollRight = () => {
        setRight(d6());
    };

    const equal = left === right;
    const lose = equal && left === 1;
    const win = equal && !lose;

    return (
        <div>
            <div>
                <span data-testid="left-die">{left}</span>{" "}
                <span data-testid="right-die">{right}</span>
            </div>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>{" "}
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            {lose && <p>Lose</p>}
            {win && <p>Win</p>}
        </div>
    );
}
