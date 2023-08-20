import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Feature=({title, desc})=>{
    return(
        <>
            <h2>Discover Educators</h2>
            <p>Explore detailed profiles of educators in various subjects.</p>
        </>
    )
}

const Home = () => {
  return (
    <div className="home">
      <header className="hero text-center py-5" style={{ background: '#343a40', color: 'white' }}>
        <h1>Welcome to EduRator</h1>
        <p className="lead">Empowering students to share their educational insights.</p>
      </header>
      <Container className="features text-center my-5">
        <Row>
          <Col md={4} className="mb-4">
            <Feature  title={"Engage in Dialogue"} desc={"Participate in discussions with educators and fellow students."} />
          </Col>
          <Col md={4} className="mb-4">
            <Feature title={"Engage in Dialogue"} desc={"Participate in discussions with educators and fellow students."} />
          </Col>
          <Col md={4} className="mb-4">
            <Feature title={"Engage in Dialogue"} desc={"Participate in discussions with educators and fellow students."} />
          </Col>
        </Row>
      </Container>
      <div className="join text-center py-5" style={{ background: '#f8f9fa' }}>
        <Feature  title={"Join EduRator Today"} desc={"Contribute to an informed and collaborative learning environment."} />
        <Button variant="primary">Get Started</Button>
      </div>
    </div>
  );
};

export default Home;
