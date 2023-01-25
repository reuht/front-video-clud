import { Row, Col, Container } from "react-bootstrap";
import CardMovie from "../CardMovie/CardMovie";
import NavBar from "../Nav/NavBar";

const Movies = () => {
  return (
    <>
      <Row>
        <NavBar />
      </Row>
      <Container>
        <CardMovie />
      </Container>
    </>
  );
};

export default Movies;
