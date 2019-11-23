import React from 'react';
import {Row, Col} from 'reactstrap';
import {links, socialMediaLinks} from '../resource/links';
import { config } from '../resource/globals';

/**
 * Header band over the entire website. Adds an event listener for window resizing events, and 
 * dynamically spaces elements based on the size of the window. If the window size is small enough,
 * will just display the site title and add an open-menu button.
 * 
 * Window resize source: https://goshakkk.name/different-mobile-desktop-tablet-layouts-react/
 */
class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
    window.addEventListener('resize', this.handleWindowSizeChange);
  };

  // --- METHODS FOR MANAGING WINDOW RESIZING ---

  isMobile = (width) => {
    return width <= config.maxMobileWidth;
  }

  // componentWillMount() { // deprecated
  //   window.addEventListener('resize', this.handleWindowSizeChange);
  // }

  componentWillUnmount() {
    // remove the listener when the component is removed
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    let width = window.innerWidth;
    if (!this.isMobile(width)) {
      // window size flipped from is mobile to not is mobile; this is the only reason the mobile 
      // menu should close if it was open
      this.props.closeMobileMenu();
    }
    this.setState({
      width: width
    });
  };

  // --- BASE COMPONENT RENDERING ---

  title = (headerSpacing) => {
    return (
      <span className={headerSpacing ? "header-inline" : "small-header-inline"}>
        <a className="header-anchor" href={ links.home }>
          <h3 className="text-header"><strong>SUIT UP, SOLDIER</strong></h3>
        </a>
      </span>
    );
  };

  buttons = () => {
    return (
      <span>
        <span className="header-inline"><a className="header-anchor" href={ links.home }>Home</a></span>
        <span className="header-inline"><a className="header-anchor" href={ links.contact }>Contact</a></span>
        {/* <span className="header-inline"><a className="header-anchor" href={ links.shop }>Shop</a></span> */}
      </span>
    );
  };

  socialMedia = (mobile = false) => {
    if (mobile) {
      const smLinks = socialMediaLinks.map((link) => 
        <a key={link.alt} href={link.link}>
          <img className="social-media-icon-mobile" src={"/img/socialMedia/" + link.icon} alt={link.link}/>
        </a>
      )
      return (
        <Col className="col-md-4 center">
          {smLinks}
        </Col>
      );
    } else {
      const smLinks = socialMediaLinks.map((link) => 
        <a key={link.alt} href={link.link}>
          <img className="social-media-icon" src={"/img/socialMedia/" + link.icon} alt={link.link}/>
        </a>
      )
      return (
        <Col className="col-md-4 align-content-right">
          {smLinks}
        </Col>
      );
    }
  };

  // --- RENDER ---

  render() {
    const width = this.state.width;
    const isMobile = this.isMobile(width);
    const combineButtons = width >= 900;

    if (isMobile) {
      return (
        <div>
          <div className="mobile-header">
            <span className="mobile-menu-button-open">
              <button className="mobile-menu-button-open" onClick={this.props.openMobileMenu}>&#8942;</button>
            </span>
            { this.title(false) }
          </div>
          <div style={{margin:'4em'}}/>
          <div className="bottom-spacer">
            { this.socialMedia(true) }
          </div>
        </div>
      )
    } else if (combineButtons) {
      return (
        <div className="header">
          <Row>
            <Col className="col-12 col-md-8">
              { this.title(true) }
              { this.buttons() }
            </Col>
            { this.socialMedia() }
          </Row>
        </div>
      );
    } else {
      return (
        <div className="header">
          <Row>
            <Col className="col-12 col-md-4">
              { this.title(true) }
            </Col>
            <Col className="col-md-4">
              { this.buttons() }
            </Col>
            { this.socialMedia() }
          </Row>
        </div>
      );
    }
  }
}

export default Header;