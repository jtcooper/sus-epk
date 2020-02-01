import React from 'react';
import YoutubeFrame from '../component/youtubeFrame';

export class LeftPanel extends React.Component {
  render() {
    return (
      <div>
        <video
          className="youtube-video"
          controls
          title="promo"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          src="https://suitupsoldier.com/video/promoJan2020-web.mp4"
          allowFullScreen>
            Sorry, your browser doesn't support embedded videos.
        </video>
        <YoutubeFrame title="villains" src="https://www.youtube.com/embed/yvjlmTXLgIg"/>
        <YoutubeFrame title="tongue tied twisted" src="https://www.youtube.com/embed/WEYzM7kCBLg"/>
      </div>
    )
  }
}

export default LeftPanel