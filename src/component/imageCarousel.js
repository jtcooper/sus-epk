import React from 'react';
import {useState} from 'react';
import {Carousel, CarouselItem, CarouselCaption, CarouselControl, CarouselIndicators} from 'reactstrap';

const items = [
  {
    src: 'img/carousel/bbqShow.png',
    altText: 'BBQ Show',
    caption: ''
  },
  {
    src: 'img/carousel/theRise1.jpg',
    altText: 'The Rise',
    caption: ''
  },
  // {
  //   src: 'img/carousel/velour2.jpg',
  //   altText: 'Velour',
  //   caption: ''
  // },
  // {
  //   src: 'img/carousel/theRise2.jpg',
  //   altText: 'The Rise',
  //   caption: ''
  // },
  {
    src: 'img/carousel/velour.jpg',
    altText: 'Velour',
    caption: ''
  }
]

export const ImageCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{maxWidth:'100%'}} />
        {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
      </CarouselItem>
    );
  });

  return (
    <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}>
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}