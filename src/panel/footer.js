import React from 'react';
import { socialMediaLinks, links } from '../resource/links';

export class Footer extends React.Component {
  render() {
    const smLinks = socialMediaLinks.map((link) => 
      <span className="inline footer-link-container" key={link.alt}><a className="footer-link" href={link.link}>{link.alt}</a></span>
    )

    return (
      <div className="footer center">
        <p className="bottom-spacer">{smLinks}</p>
        <p className="footer-link-container"><a className="footer-link" href={links.credits}>Credit</a></p>
        <p className="text-white">&copy;Suit Up, Soldier 2020</p>
      </div>
    );
  }
}

export default Footer