import React from 'react';
import {links} from '../resource/links.js';

export function MobileMenu(props) {
  if (props.visible) {
    return (
      <div id="mobile-menu">
        {/* <button className="close-button" onClick={props.onClose}>X</button> */}
        <div className="close-button-container">
          <button className="mobile-menu-button" onClick={props.onClose}>X</button>
        </div>
        <div className="mobile-menu-button-container"><a className="mobile-menu-button" href={ links.home }>Home</a></div>
        <div className="mobile-menu-button-container"><a className="mobile-menu-button" href="#">Contact</a></div>
        <div className="mobile-menu-button-container"><a className="mobile-menu-button" href="#">Shop</a></div>
      </div>
    );
  }
  return null;
}