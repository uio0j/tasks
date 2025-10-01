import React, { useState } from "react";
import { Form } from "react-bootstrap";

//const DEFAULT_COLOR = COLORS[4];

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "yellow",
        "black",
        "white",
    ];
    const [chosenColor, setisChosenColor] = useState<string>(colors[0]);
    function changeColor(event: React.ChangeEvent<HTMLInputElement>) {
        setisChosenColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color: string) => (
                    <div key={color}>
                        <Form.Check
                            inline
                            type="radio"
                            name="colors"
                            onChange={changeColor}
                            id="chosenColor-check"
                            value={color}
                            label={color}
                            //style={{ backgroundColor: color }}
                            checked={chosenColor === color}
                        ></Form.Check>
                    </div>
                ))}
                <div>
                    You have chosen{" "}
                    <span
                        data-testid="colored-box"
                        style={{ backgroundColor: chosenColor }}
                    >
                        {chosenColor}
                    </span>
                </div>
            </div>
        </div>
    );
}
