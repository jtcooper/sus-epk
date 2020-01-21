import React from 'react';
import {links} from '../resource/links';

/**
 * PressPanel displays a "PRESS" header followed by article links.
 */
export default function PressPanel(props) {
  return (
    <div>
      <h2 className="text-spaced"><strong>PRESS</strong></h2>
      <br/>
      {/* <p><a href={ links.reachProvoArticle }>Reach Provo Magazine</a></p> */}
      <p><a href={ links.dailyUniverseArticle }>Newspaper: Daily Universe</a></p>
    </div>
  );
}