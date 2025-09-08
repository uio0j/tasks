import React from "react";
import "./App.css";
import butterfly from "./images/butterfly.png";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1>Task 3</h1>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <p></p>
                Alaa Abu Hawzah
                <p></p>
                Hello World
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
                <img
                    src={butterfly}
                    alt="A photo of a blue butterfly"
                    width="300"
                    height="200"
                />
                Here are three types of Butterflies:
                <ul>
                    <li>Monarch butterfly</li>
                    <li>Common blue butterfly</li>
                    <li>Painted lady</li>
                </ul>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
