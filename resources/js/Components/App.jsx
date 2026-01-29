import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './post-card';
import { Container, Row, Col } from 'react-bootstrap'
import Header from './header';
import { Normalize } from 'styled-normalize';
import Sidebar from './sidebar';
import { GlobalStyles } from './global-styles';
import Login from './Login';

function App() {
  // const isLogged = true;
  // if (!isLogged) {
  //   return <>
  //     <GlobalStyles></GlobalStyles>
  //     <Normalize></Normalize>
  //     <Container>
  //       <Login></Login>
  //     </Container>
  //   </>;
  // }
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Normalize></Normalize>
      <Container className='container'>
        <Sidebar></Sidebar>
        <Row>
          <Col>
            <Header></Header>
          </Col>
        </Row>
        <Row className='row'>
          <Col>
            <Post
              titleText="DAR"
              subtitleText="DAR META"
            />
          </Col>
          <Col>
           <Post
              titleText="Traveler"
              subtitleText="DAR META META"
            />
          </Col>
          <Col>
            <Post
              titleText="DAR"
              subtitleText="DAR META"
            />
          </Col>
        </Row>
        <Row className='row'>
          <Col>
            <Post
              titleText="DAR"
              subtitleText="DAR META"
            />
          </Col>
          <Col>
           <Post
              titleText="Traveler"
              subtitleText="DAR META META"
            /> 
          </Col>
          <Col>
            <Post
              titleText="DAR"
              subtitleText="DAR META"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
