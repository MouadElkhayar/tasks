import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    Christmas = "🎄",
    Halloween = "🎃",
    ValentinesDay = "💘",
    Thanksgiving = "🦃",
    Easter = "🐰",
}

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>(Holiday.Christmas);

    function nextAlphabetical(current: Holiday): Holiday {
        switch (current) {
            case Holiday.Christmas:
                return Holiday.Easter;
            case Holiday.Easter:
                return Holiday.Halloween;
            case Holiday.Halloween:
                return Holiday.Thanksgiving;
            case Holiday.Thanksgiving:
                return Holiday.ValentinesDay;
            case Holiday.ValentinesDay:
                return Holiday.Christmas;
        }
    }

    function nextByYear(current: Holiday): Holiday {
        switch (current) {
            case Holiday.ValentinesDay:
                return Holiday.Easter;
            case Holiday.Easter:
                return Holiday.Halloween;
            case Holiday.Halloween:
                return Holiday.Thanksgiving;
            case Holiday.Thanksgiving:
                return Holiday.Christmas;
            case Holiday.Christmas:
                return Holiday.ValentinesDay;
        }
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>

            <Button
                onClick={() => {
                    setHoliday(nextAlphabetical(holiday));
                }}
            >
                Advance by Alphabet
            </Button>

            <Button
                onClick={() => {
                    setHoliday(nextByYear(holiday));
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
