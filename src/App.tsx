import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Mouad UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This Is My World</h1>
            <p>
                Hello World! Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
            <img
                src="https://media.giphy.com/media/3o7TKPj1r6g0Z8k5aY/giphy.gif"
                alt="React Logo"
            />
            Ordered list:
            <ol>
                <li>One piece</li>
                <li>Hunter X Hunter</li>
                <li>Bleach</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <col
                        style={{
                            width: "65px",
                            height: "55px",
                            backgroundColor: "red",
                        }}
                    ></col>
                    <col
                        style={{
                            width: "65px",
                            height: "55px",
                            backgroundColor: "red",
                        }}
                    ></col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
