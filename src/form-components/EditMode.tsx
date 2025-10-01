import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [studentName, setStudentName] = useState<string>("Your Name");
    const [isEditMode, setIsEditMode] = useState<boolean>(false);

    // function updateIfStudent(event: React.ChangeEvent<HTMLInputElement>) {
    //     setIsStudent(event.target.checked);
    // }
    let content;
    if (isEditMode) {
        content = (
            <div>
                <Form.Group controlId="name-input" className="mb-2">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        value={studentName}
                        onChange={(e) => {
                            setStudentName(e.target.value);
                        }}
                    ></Form.Control>
                    /
                </Form.Group>

                <Form.Check
                    type="checkbox"
                    id="student-checkbox"
                    label="Student?"
                    checked={isStudent}
                    onChange={(e) => {
                        setIsStudent(e.target.checked);
                    }}
                ></Form.Check>
            </div>
        );
    } else {
        if (isStudent) {
            content = <div>{studentName} is a student</div>;
        } else {
            content = <div>{studentName} is not a student</div>;
        }
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-in-edit-mode"
                label="Edit Mode"
                checked={isEditMode}
                onChange={(e) => {
                    setIsEditMode(e.target.checked);
                }}
            ></Form.Check>
            {content}
        </div>
    );
}
