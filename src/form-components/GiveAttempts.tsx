import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const useAttempt = () => {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    };

    const gainAttempts = () => {
        const amount = parseInt(requestedAttempts);

        if (Number.isInteger(amount)) {
            setAttempts(attempts + amount);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attempts}</p>

            <input
                type="number"
                value={requestedAttempts}
                onChange={(e) => {
                    setRequestedAttempts(e.target.value);
                }}
            />

            <button onClick={useAttempt} disabled={attempts === 0}>
                use
            </button>

            <button onClick={gainAttempts}>gain</button>
        </div>
    );
}
