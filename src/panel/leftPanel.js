import React from 'react';
import YoutubeFrame from '../component/youtubeFrame';

export class LeftPanel extends React.Component {
  render() {
    return (
      <div>
        <YoutubeFrame title="epk" src="https://www.youtube.com/embed/Vy3_wCm9MDw"/>
        <YoutubeFrame title="chainsmokers" src="https://www.youtube.com/embed/pAdAq9KRUfI"/>
      </div>
    )
  }
}

export default LeftPanel