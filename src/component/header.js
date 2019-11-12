import React from 'react';
import {Row, Col} from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <div class="header">
                <Row>
                    <Col>
                        <span className="header-inline"><a className="header-anchor" href="http://suitupsoldier.com/">
                            <h3 className="text-header"><strong>SUIT UP, SOLDIER</strong></h3></a></span>
                        {/* FIXME: following links need to be in a separate Col; also want to think about hiding them for mobile? */}
                        <span className="header-inline"><a className="header-anchor" href="http://suitupsoldier.com/">Home</a></span>
                        <span className="header-inline"><a className="header-anchor" href="#">Contact</a></span>
                        <span className="header-inline"><a className="header-anchor" href="#">Shop</a></span>
                    </Col>
                    <Col style={{textAlign:"right"}}>
                        <a href="https://www.facebook.com/suitupsoldier/">
                            <img className="social-media-icon" src="/img/socialMedia/facebook.png" alt="Facebook"/></a>
                        <a href="https://www.instagram.com/suitupsoldier_/">
                            <img className="social-media-icon" src="/img/socialMedia/instagram.png" alt="Instagram"/></a>
                        <a href="https://www.youtube.com/suitupsoldier">
                            <img className="social-media-icon" src="/img/socialMedia/youtube.png" alt="YouTube"/></a>
                        <a href="https://open.spotify.com/artist/6LnU5mc8E2Bdk92w63cqww">
                            <img className="social-media-icon" src="/img/socialMedia/spotify.png" alt="Spotify"/></a>
                        <a href="https://music.apple.com/ca/artist/suit-up-soldier/id1348708315">
                            <img className="social-media-icon" src="/img/socialMedia/music.png" alt="Apple Music"/></a>
                        <a href="https://soundcloud.com/suit-up-soldier">
                            <img className="social-media-icon" src="/img/socialMedia/soundcloud.png" alt="SoundCloud"/></a>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;