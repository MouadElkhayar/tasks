import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ChangeColorProps {
    colorIndex: number;
    setColorIndex: React.Dispatch<React.SetStateAction<number>>;
}

function ChangeColor({
    colorIndex,
    setColorIndex,
}: ChangeColorProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setColorIndex((1 + colorIndex) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({
    colorIndex,
}: {
    colorIndex: number;
}): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox({
    colorIndex = DEFAULT_COLOR_INDEX,
}: {
    colorIndex?: number;
}): React.JSX.Element {
    const [currentColorIndex, setCurrentColorIndex] =
        useState<number>(colorIndex);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[currentColorIndex]}</span>
            <div>
                <ChangeColor
                    colorIndex={currentColorIndex}
                    setColorIndex={setCurrentColorIndex}
                ></ChangeColor>
                <ColorPreview colorIndex={currentColorIndex}></ColorPreview>
            </div>
        </div>
    );
}
