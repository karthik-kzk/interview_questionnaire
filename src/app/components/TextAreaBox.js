"use client";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useState,useEffect} from "react";

function TextAreaBox({ ques, nextButton, ans,next }) {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  function onChange(e) {
    setInput(e.target.value);
  }
  function onClick() {
    nextButton(input);
  }
  function showButton() {
    setShow(!show);
  }
  useEffect(() => {
    setShow(false);
    setInput("");
    console.log(next);
  }, [next]);
  return (
    <>
      <Container fluid="md">
        <Row >
          <Col>
            <Form.Label htmlFor="question">{ques}</Form.Label>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel controlId="floatingTextarea2" label="Answer">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                onChange={onChange}
                value={input}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" onClick={onClick}>
              Submit
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="secondary" onClick={showButton}>
              {show == true ? "hide" : "show"}
            </Button>
            {show && (
              <Form.Label htmlFor="question" style={{ color: "red" }}>
                {ans}
              </Form.Label>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TextAreaBox;
