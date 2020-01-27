import React from 'react';
import {useState} from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators} from 'reactstrap';

// Image dimensions: 800 x 533
const items = [
  {
    src: 'img/carousel/coinBYU.jpg',
    altText: 'COIN at BYU'
  },
  {
    src: 'img/carousel/bbqShow.png',
    altText: 'BBQ Show'
  },
  {
    src: 'img/carousel/theRise1.jpg',
    altText: 'The Rise'
  },
  {
    src: 'img/carousel/hairFlip.png',
    altText: 'Wes Hair Flip'
  },
  {
    src: 'img/carousel/dec2019.jpg',
    altText: 'Full Band'
  },
  {
    src: 'img/carousel/velour.jpg',
    altText: 'Velour'
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