"use client";
import styles from "./page.module.css";
import TextAreaBox from "./components/TextAreaBox";
import ReadTextFile from "./components/ReadTextFile";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextAreaBoxWrapper from "./components/TextAreaBoxWrapper"


export default function Home() {
  return (
    <div >
      <Container fluid="md">
        <Row>
          <Col>
            {/* <TextAreaBox ques={"long lengthy answer is very long answer"} /> */}
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <ReadTextFile /> */}
            <TextAreaBoxWrapper />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
