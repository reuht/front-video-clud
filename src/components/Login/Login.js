import NavBar from "../Nav/NavBar";
import { Row, Col, Container } from "react-bootstrap";
import FormLogin from "../FormLogin/FormLogin";

const Login = () => {
    // md={{ span: 6, offset: 3 }}
  return (
    <>
      <Row>
        <NavBar />
      </Row>
      <Container>
        <Row md={5}>
           <h2>Login</h2>
        </Row>
        <Row>
            <Col >
                <FormLogin />
            </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
