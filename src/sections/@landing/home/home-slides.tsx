import Box from '@mui/material/Box';

import { Image } from 'src/components/image';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

// ----------------------------------------------------------------------
const SLIDES = [
  '/assets/slides/slider-01.jpg',
  '/assets/slides/slider-02.jpg',
  '/assets/slides/slider-03.jpg',
  '/assets/slides/slider-04.jpg',
];
type Props = {
  data: {
    id: string;
    title: string;
    coverUrl: string;
    description: string;
  }[];
};

export default function HomeSlides() {
  const carousel = useCarousel({ axis: 'y' });

  return (
    <Box sx={{ position: 'relative' }}>
      <Carousel
        carousel={carousel}
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
          height: { xs: 240, sm: 320, md: 480 },
        }}
      >
        {SLIDES.map((item, index) => (
          <CarouselItem key={item} item={item} />
        ))}
      </Carousel>

      <CarouselDotButtons
        scrollSnaps={carousel.dots.scrollSnaps}
        selectedIndex={carousel.dots.selectedIndex}
        onClickDot={carousel.dots.onClickDot}
        sx={{
          top: 16,
          right: 16,
          position: 'absolute',
          color: 'warning.main',
        }}
      />

      <CarouselArrowBasicButtons
        {...carousel.arrows}
        options={carousel.options}
        slotProps={{
          prevBtn: { sx: { p: 0.75 } },
          nextBtn: { sx: { p: 0.75 } },
        }}
        sx={{
          p: 0.5,
          gap: 0.5,
          right: 16,
          bottom: 16,
          borderRadius: 1,
          position: 'absolute',
          bgcolor: 'common.white',
        }}
      />
    </Box>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  item: string;
};

function CarouselItem({ item }: CarouselItemProps) {
  return (
    <Box sx={{ position: 'relative', height: 1 }}>
      <Image visibleByDefault alt={item} src={item} sx={{ width: 1, height: 1 }} />
    </Box>
  );
}
