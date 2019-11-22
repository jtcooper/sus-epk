import React from 'react';
import { ImageCarousel } from '../component/imageCarousel';

/**
 * AboutPanel features an About description of SUS, a Spotify follow button, contact information, 
 * and an image carousel.
 */
function AboutPanel(props) {
  return (
    <div>
      <h2 className="text-spaced"><strong>ABOUT SUS</strong></h2>
      <br/>
      <p>Wesley Monahan formed Suit Up, Soldier in 2014. Although a steady venture, the band recently came out of hiding to debut new music with a fresh line-up of members at Velour in October 2019.</p>
      <p>"I love hearing this in contrast to the 'Lost You - EP' version. Don't get me wrong, that is a KILLER record, but the evolution is clear. I love how tight and clean the new sound is. Tons of clever and calculated production decisions. Tactful crunchy guitar riffs. Reminds me a lot of Penguin Prison or Panama Wedding, some of my favorite unskippable electro-pop bands. This is an excellent step forward - I'm genuinely stoked to hear all your new stuff..." -Jordan Ottesen at Reach Provo Magazine</p>
      <div className="spotify-follow-container">
        <iframe 
            title="follow-spotify"
            src="https://open.spotify.com/follow/1/?uri=spotify:artist:6LnU5mc8E2Bdk92w63cqww?si=BEpUjBrPT8m5wEcGLKr2yw&size=detail&theme=light" 
            width="300"
            height="56"
            scrolling="no"
            frameBorder="0"
            allowtransparency="true"></iframe>
      </div>
      <h2 className="text-spaced"><strong>CONTACT</strong></h2>
      <br/>
      <p className="text-inline"><strong>MANAGEMENT</strong></p>
      <p className="text-inline">Wesley Monahan</p>
      <p className="text-inline"><a href="mailto:wesley@suitupsoldier.com">wesley@suitupsoldier.com</a></p>
      <br/>
      <p className="text-inline"><strong>BOOKING</strong></p>
      <p className="text-inline">McKay Johnson</p>
      <p className="text-inline"><a href="mailto:mckay@suitupsoldier.com">mckay@suitupsoldier.com</a></p>
      <br/>
      <p className="text-inline"><strong>PROMOTION</strong></p>
      <p className="text-inline">Ryan Rostrom</p>
      <p className="text-inline"><a href="mailto:ryan@suitupsoldier.com">ryan@suitupsoldier.com</a></p>
      <br/>
      <ImageCarousel/>
    </div>
  );
}

export default AboutPanel;