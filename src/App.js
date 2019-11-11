import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import Header from './component/header.js';
import AboutPanel from './component/about.js';
import Footer from './component/footer.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Container style={{minWidth:'100%',paddingLeft:'50px',paddingRight:'50px'}}>
          <Row>
            <Col><Header/></Col>
          </Row>
          <Row>
            <Col><h1>SoundCloud</h1></Col>
            <Col><img id="infographic" src='/img/susInfo.png' alt="SUS Infographic" /> </Col>
            <Col><AboutPanel/></Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
