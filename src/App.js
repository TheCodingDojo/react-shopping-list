import "./App.css";
import styled from "styled-components";

import { Container } from "./components/Container";
import { Grid, Row, Col } from "./components/Grid";

function App() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
  `;

  return (
    <div>
      <Container>
        <Title>Shopping List</Title>
        <Grid>
          <Row>
            <Col size={2}>Hello</Col>
            <Col size={1}>World</Col>
          </Row>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
