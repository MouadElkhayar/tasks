import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [inProgress, setInProgress] = useState(false);

    const startQuiz = () => {
        setInProgress(true);
        setAttempts((prev) => prev - 1);
    };

    const stopQuiz = () => {
        setInProgress(false);
    };

    const mulligan = () => {
        setAttempts((prev) => prev + 1);
    };

    return (
        <div>
            <p>Attempts remaining: {attempts}</p>

            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>

            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>

            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
