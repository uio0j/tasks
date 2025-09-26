import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

//type QuestionType = "multiple_choice_question" | "short_answer_question";

export function ChangeType(): React.JSX.Element {
    const [qType, setQType] = useState<QuestionType>("short_answer_question");
    const change_answer = (): void => {
        setQType(
            qType === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    };
    return (
        <div>
            <Button onClick={change_answer}>Change Type</Button>
            {qType === "multiple_choice_question" ?
                <p>Multiple choice</p>
            :   <p>Short Answer</p>}
        </div>
    );
}
