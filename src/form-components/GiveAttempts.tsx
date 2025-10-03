import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsReq, setAttemptsReq] = useState<string>("");
    function changeRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setAttemptsReq(event.target.value);
    }
    const use = (): void => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };
    const gain = (): void => {
        const parsed = parseInt(attemptsReq);
        if (!isNaN(parsed)) {
            setAttemptsLeft(attemptsLeft + parsed);
        }
    };
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>The number of attemps left is {attemptsLeft}.</div>
            <Form.Group controlId="formAttempts">
                <Form.Label>Number of attemps requested: </Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsReq}
                    onChange={changeRequest}
                />
            </Form.Group>
            <Button onClick={use} disabled={attemptsLeft === 0}>
                use
            </Button>
            <Button onClick={gain}>gain</Button>
        </div>
    );
}
