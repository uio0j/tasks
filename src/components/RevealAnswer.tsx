import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [showAnswer, setShowAnswer] = useState(false);
    const changeAnswer = (): void => {
        setShowAnswer(!showAnswer);
    };
    return (
        <div>
            <Button onClick={changeAnswer}>Reveal Answer</Button>
            {showAnswer && <div>42</div>}
        </div>
    );
    //<div>Reveal Answer</div>;
}
