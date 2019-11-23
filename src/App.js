import React from 'react';
import './App.css';
import {Container, Row, Col} from 'reactstrap';
import Header from './panel/header';
import AboutPanel from './panel/about';
import Footer from './panel/footer';
import LeftPanel from './panel/leftPanel';
import PressPanel from './panel/press';
import MobileMenu from './component/mobileMenu';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mobileMenuVisible: false
    };
  }

  openMobileMenu = () => {
    this.setState({
      mobileMenuVisible: true
    });
  }

  closeMobileMenu = () => {
    this.setState({
      mobileMenuVisible: false
    });
  }

  render() {
    return (
      <div>
        <Container className="main-container">
          <MobileMenu visible={this.state.mobileMenuVisible} onClose={this.closeMobileMenu}/>
          <Header openMobileMenu={this.openMobileMenu} closeMobileMenu={this.closeMobileMenu}/>
          <Row>
            {/* Note the use of two classnames: the first one ensures that we get either three columns or one column */}
            <Col className="col-12 col-lg-4"><LeftPanel/></Col>
            <Col className="col-12 col-lg-4 bottom-spacer">
              <img className="bottom-spacer" id="infographic" src='/img/susInfo.png' alt="SUS Infographic"/>
              <PressPanel/>
            </Col>
            <Col className="col-lg-4"><AboutPanel/></Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;
