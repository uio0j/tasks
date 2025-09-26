import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    const start_quiz = (): void => {
        if (attempts > 0) {
            setAttempts(attempts - 1);
            setInProgress(true);
        }
    };
    const stop_quiz = (): void => {
        setInProgress(false);
    };
    const mulligan = () => {
        setAttempts(attempts + 1);
    };
    return (
        <div>
            <p>Attempts left: {attempts}</p>
            <Button
                onClick={start_quiz}
                disabled={inProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stop_quiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}

//<div>Start Attempt</div>;
