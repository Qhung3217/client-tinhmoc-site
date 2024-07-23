import { useRef, useEffect } from 'react';

import { Box } from '@mui/material';

import { Image } from 'src/components/image';
import { useCarousel } from 'src/components/carousel';

const slides = [
  {
    title: '1L01',
    url: '/assets/landing/doors/1L01.jpg',
  },
  {
    title: '2C02-G',
    url: '/assets/landing/doors/2C02-G.jpg',
  },
  {
    title: '2C02',
    url: '/assets/landing/doors/2C02.jpg',
  },
  {
    title: '2L01',
    url: '/assets/landing/doors/2L01.jpg',
  },
  {
    title: '2S01',
    url: '/assets/landing/doors/2S01.jpg',
  },
  {
    title: '3C02',
    url: '/assets/landing/doors/3C02.jpg',
  },
  {
    title: '3S02',
    url: '/assets/landing/doors/3S02.jpg',
  },
  {
    title: '5L01',
    url: '/assets/landing/doors/5L01.jpg',
  },
];

export default function HomeDoors() {
  const carousel = useCarousel({ loop: true, slidesToShow: 7, align: 'center' });
  const ref = useRef<any>();
  useEffect(() => {
    window.$(window);
    console.log(ref.current, $('#carousel'));
    ref.current?.waterwheelCarousel();
  }, [ref]);
  return (
    <Box component="section">
      <Box position="relative">
        {/* <Carousel carousel={carousel}>
          {slides.map((slide) => (
            <Box sx={{ position: 'relative' }} key={slide.title}>
              <Image visibleByDefault alt={slide.title} src={slide.url} />
            </Box>
          ))}
        </Carousel> */}
        <Box component="div" id="carousel" ref={ref}>
          {slides.map((slide, index) => (
            <Box sx={{ position: 'relative' }} key={slide.title} id={`item-${index + 1}`}>
              <Image visibleByDefault alt={slide.title} src={slide.url} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
