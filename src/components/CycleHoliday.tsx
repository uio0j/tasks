import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Ramadan"
    | "Eid al-Fitr"
    | "Hajj"
    | "Eid al-Adha"
    | "Islamic New Year";

const EMOJI: Record<Holiday, string> = {
    Ramadan: "🌙",
    "Eid al-Fitr": "🕌",
    Hajj: "🕋",
    "Eid al-Adha": "🐑",
    "Islamic New Year": "📿",
};

const ALPHA_ORDER: Record<Holiday, Holiday> = {
    "Eid al-Adha": "Eid al-Fitr",
    "Eid al-Fitr": "Hajj",
    Hajj: "Islamic New Year",
    "Islamic New Year": "Ramadan",
    Ramadan: "Eid al-Adha",
};

const YEAR_ORDER: Record<Holiday, Holiday> = {
    Ramadan: "Eid al-Fitr",
    "Eid al-Fitr": "Hajj",
    Hajj: "Eid al-Adha",
    "Eid al-Adha": "Islamic New Year",
    "Islamic New Year": "Ramadan",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Ramadan");

    function advanceAlphabet(): void {
        const newHoli = ALPHA_ORDER[holiday];
        setHoliday(newHoli);
    }
    function advanceYear(): void {
        const newHoli_year = YEAR_ORDER[holiday];
        setHoliday(newHoli_year);
    }
    return (
        <div>
            <p>
                Holiday: {EMOJI[holiday]} ({holiday})
            </p>
            <div>
                <Button onClick={advanceAlphabet}>Advance by Alphabet</Button>
                <Button onClick={advanceYear}>Advance by Year</Button>
            </div>
        </div>
    );
}
