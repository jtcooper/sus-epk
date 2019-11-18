import React from 'react';
import { ImageCarousel } from './imageCarousel';

function AboutPanel(props) {
  return (
    <div>
      <h1 className="text-spaced"><strong>ABOUT SUS</strong></h1>
      <br/>
      <p>Wesley Monahan formed Suit Up, Soldier in 2014. Although a steady venture, the band recently came out of hiding to debut new music with a fresh line-up of members at Velour in October 2019.</p>
      <p>"I love hearing this in contrast to the 'Lost You - EP' version. Don't get me wrong, that is a KILLER record, but the evolution is clear. I love how tight and clean the new sound is. Tons of clever and calculated production decisions. Tactful crunchy guitar riffs. Reminds me a lot of Penguin Prison or Panama Wedding, some of my favorite unskippable electro-pop bands. This is an excellent step forward - I'm genuinely stoked to hear all your new stuff..." -Jordan Ottesen at Reach Provo Magazine</p>
      <br/>
      <h2 className="text-spaced"><strong>CONTACT</strong></h2>
      <br/>
      <p className="text-inline"><strong>MANAGEMENT</strong></p>
      <p className="text-inline">Wesley Monahan</p>
      <p className="text-inline"><a href="mailto:suitupsoldier@gmail.com">suitupsoldier@gmail.com</a></p>
      <br/>
      <p className="text-inline"><strong>BOOKING</strong></p>
      <p className="text-inline">McKay Johnson</p>
      <p className="text-inline"><a href="mailto:suitupsoldier@gmail.com">suitupsoldier@gmail.com</a></p>
      <br/>
      <p className="text-inline"><strong>PROMOTION</strong></p>
      <p className="text-inline">Ryan Rostrom</p>
      <p className="text-inline"><a href="mailto:suitupsoldier@gmail.com">suitupsoldier@gmail.com</a></p>
      <br/>
      <ImageCarousel/>
    </div>
  );
}

export default AboutPanel;