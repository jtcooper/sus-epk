import React from 'react';
import {links} from '../resource/links.js';

/**
 * React component which creates an overlay of the menu for mobile users, when active.
 * 
 * @param {visible, onClose} props 
 */
export default function MobileMenu(props) {
  if (props.visible) {
    return (
      <div id="mobile-menu">
        <div className="close-button-container">
          <button className="mobile-menu-button" onClick={props.onClose}>X</button>
        </div>
        <div className="mobile-menu-button-container"><a className="mobile-menu-button" href={ links.home }>Home</a></div>
        <div className="mobile-menu-button-container"><a className="mobile-menu-button" href={ links.contact }>Contact</a></div>
        {/* <div className="mobile-menu-button-container"><a className="mobile-menu-button" href={ links.shop }>Shop</a></div> */}
      </div>
    );
  }
  return null;
}