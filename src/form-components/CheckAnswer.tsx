import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function changeAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    const cheched = expectedAnswer === answer ? "✔️" : "❌";

    return (
        <div>
            <h3>Check Answer</h3>
            <div>
                <Form.Group controlId="formAnser">
                    <Form.Label>Your Answer:</Form.Label>
                    <Form.Control value={answer} onChange={changeAnswer} />
                </Form.Group>
                <div>Your answer is {cheched}.</div>
            </div>
        </div>
    );
}
