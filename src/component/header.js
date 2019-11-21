import React from 'react';
import {Row, Col} from 'reactstrap';
import {links} from '../resource/links';

/**
 * Window resize source: https://goshakkk.name/different-mobile-desktop-tablet-layouts-react/
 */
class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  };

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  title = () => {
    return (
      <span className="header-inline"><a className="header-anchor" href={ links.home }>
        <h3 className="text-header"><strong>SUIT UP, SOLDIER</strong></h3></a></span>
    );
  };

  buttons = () => {
    return (
      <span>
        <span className="header-inline"><a className="header-anchor" href={ links.home }>Home</a></span>
        <span className="header-inline"><a className="header-anchor" href="#">Contact</a></span>
        <span className="header-inline"><a className="header-anchor" href="#">Shop</a></span>
      </span>
    );
  };

  socialMedia = () => {
    return (
      <Col className="col-md-4" style={{textAlign:"right"}}>
        <a href={links.facebook}>
            <img className="social-media-icon" src="/img/socialMedia/facebook.png" alt="Facebook"/></a>
        <a href={links.instagram}>
            <img className="social-media-icon" src="/img/socialMedia/instagram.png" alt="Instagram"/></a>
        <a href={links.youtube}>
            <img className="social-media-icon" src="/img/socialMedia/youtube.png" alt="YouTube"/></a>
        <a href={links.spotify}>
            <img className="social-media-icon" src="/img/socialMedia/spotify.png" alt="Spotify"/></a>
        <a href={links.appleMusic}>
            <img className="social-media-icon" src="/img/socialMedia/music.png" alt="Apple Music"/></a>
        <a href={links.soundcloud}>
            <img className="social-media-icon" src="/img/socialMedia/soundcloud.png" alt="SoundCloud"/></a>
      </Col>
    );
  };

  render() {
    const width = this.state.width;
    const isMobile = width <= 500;
    const combineButtons = width >= 900;

    if (isMobile) {
      return (
        <div class="header">
          { this.title() }
          {/* FIXME: implement */}
        </div>
      )
    } else if (combineButtons) {
      return (
        <div class="header">
          <Row>
            <Col className="col-12 col-md-8">
              { this.title() }
              { this.buttons() }
            </Col>
            { this.socialMedia() }
          </Row>
        </div>
      );
    } else {
      return (
        <div class="header">
          <Row>
            <Col className="col-12 col-md-4">
              { this.title() }
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