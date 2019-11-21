import React from 'react';

export class LeftPanel extends React.Component {
  render() {
    const opts = {
      width: '100%'
    };

    return (
      <div className="aspect-ratio--16x9 bottom-spacer">
        <div className="aspect-ratio__inner-wrapper">
          <iframe 
              title="chainsmokers" 
              className="youtube-video" 
              src="https://www.youtube.com/embed/pAdAq9KRUfI" 
              frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen></iframe>
        {/* <YouTube
          videoId='pAdAq9KRUfI'
          opts={opts}/> */}
        </div>
      </div>
    );
  }
}