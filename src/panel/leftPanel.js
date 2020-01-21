import React from 'react';
import YoutubeFrame from '../component/youtubeFrame';

export class LeftPanel extends React.Component {
  render() {
    return (
      <div>
        <YoutubeFrame title="villains" src="https://www.youtube.com/embed/yvjlmTXLgIg"/>
        <YoutubeFrame title="tongue tied twisted" src="https://www.youtube.com/embed/WEYzM7kCBLg"/>
      </div>
    )
  }
}

export default LeftPanel