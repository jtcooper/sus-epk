import React from 'react';

export default function YoutubeFrame(props) {
  return (
    <div className="aspect-ratio--16x9 bottom-spacer">
      <div className="aspect-ratio__inner-wrapper">
        <iframe 
            title={ props.title }
            className="youtube-video" 
            src={ props.src }
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
      </div>
    </div>
  );
}