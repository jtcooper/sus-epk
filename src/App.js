import React from 'react';
import './App.css';
import {Container, Row, Col} from 'reactstrap';
import Header from './component/header.js';
import AboutPanel from './component/about.js';
import Footer from './component/footer.js';
import { LeftPanel } from './component/leftPanel';

class App extends React.Component {
  render() {
    return (
      <div>
        <Container className="main-container">
          <Header/>
          <Row>
            {/* Note the use of two classnames: the first one ensures that we get either three columns or one column */}
            <Col className="col-12 col-lg-4"><LeftPanel/></Col>
            <Col className="col-12 col-lg-4 bottom-spacer"><img id="infographic" src='/img/susInfo.png' alt="SUS Infographic" /> </Col>
            <Col className="col-lg-4"><AboutPanel/></Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;
