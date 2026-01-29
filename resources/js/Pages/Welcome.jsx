import { Head, Link } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostCard from '../Components/post-card';
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../Components/header';
import Sidebar from '../Components/sidebar';
import { GlobalStyles, colorsPallete, Normalized } from '../global-styles';


function Welcome () {
  return (
    <>
      <Normalized></Normalized>
      <GlobalStyles></GlobalStyles>
      <Container className='container'>
        <Sidebar></Sidebar>
        <Row>
          <Col>
            <Header></Header>
          </Col>
        </Row>
        <Row className='row'>
          <Col>
            <PostCard
              titleText="DAR"
              subtitleText="DAR META"
            />
          </Col>
          <Col>
           <PostCard
              titleText="Traveler"
              subtitleText="DAR META META"
            />
          </Col>
          <Col>
            <PostCard
              titleText="DAR"
              subtitleText="DAR META"
            />
          </Col>
        </Row>
        <Row className='row'>
          <Col>
            <PostCard
              titleText="DAR"
              subtitleText="DAR META"
            />
          </Col>
          <Col>
           <PostCard
              titleText="Traveler"
              subtitleText="DAR META META"
            /> 
          </Col>
          <Col>
            <PostCard
              titleText="DAR"
              subtitleText="DAR META"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Welcome
