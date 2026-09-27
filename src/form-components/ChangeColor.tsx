import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "teal",
    ];

    const [chosenColor, setChosenColor] = useState("red");

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <label key={color}>
                    <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={chosenColor === color}
                        onChange={() => {
                            setChosenColor(color);
                        }}
                    />
                    {color}
                </label>
            ))}

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: chosenColor,
                }}
            >
                {chosenColor}
            </div>
        </div>
    );
}
