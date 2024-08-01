import type { IProductItem } from 'src/types/product';

import { useEffect } from 'react';

import Box from '@mui/material/Box';

import { Image } from 'src/components/image';
import { Lightbox, useLightBox } from 'src/components/lightbox';
import {
  Carousel,
  useCarousel,
  CarouselThumb,
  CarouselThumbs,
  CarouselArrowNumberButtons,
} from 'src/components/carousel';

// ----------------------------------------------------------------------

type Props = {
  images?: IProductItem['images'];
};

export function ProductDetailsCarousel({ images }: Props) {
  const carousel = useCarousel({
    thumbs: {
      slidesToShow: 'auto',
    },
  });

  const slides = images?.map((img) => ({ src: img })) || [];

  const lightbox = useLightBox(slides);

  useEffect(() => {
    if (lightbox.open) {
      carousel.mainApi?.scrollTo(lightbox.selected, true);
    }
  }, [carousel.mainApi, lightbox.open, lightbox.selected]);

  return (
    <>
      <Box component="div">
        <Box sx={{ mb: 2.5, position: 'relative' }}>
          <CarouselArrowNumberButtons
            {...carousel.arrows}
            options={carousel.options}
            totalSlides={carousel.dots.dotCount}
            selectedIndex={carousel.dots.selectedIndex + 1}
            sx={{ right: 16, bottom: 16, position: 'absolute' }}
          />

          <Carousel carousel={carousel} sx={{ maxWidth: 300, mx: 'auto' }}>
            {slides.map((slide) => (
              <Image
                key={slide.src}
                alt={slide.src}
                src={slide.src}
                ratio="2/3"
                onClick={() => lightbox.onOpen(slide.src)}
                effect="opacity"
                sx={{
                  cursor: 'zoom-in',
                  maxWidth: 300,

                  '& .mnl__image__wrapper': {
                    aspectRatio: '2/3',
                  },
                  '& .lazy-load-image-background.opacity:not(.lazy-load-image-loaded) img': {
                    display: 'none',
                  },
                }}
              />
            ))}
          </Carousel>
        </Box>

        <CarouselThumbs
          ref={carousel.thumbs.thumbsRef}
          options={carousel.options?.thumbs}
          slotProps={{ disableMask: true }}
          sx={{ width: 360 }}
        >
          {slides.map((item, index) => (
            <CarouselThumb
              key={item.src}
              index={index}
              src={item.src}
              selected={index === carousel.thumbs.selectedIndex}
              onClick={() => carousel.thumbs.onClickThumb(index)}
              sx={{
                borderRadius: 0.5,
                aspectRatio: '2/3',
                height: 'unset',
              }}
            />
          ))}
        </CarouselThumbs>
      </Box>

      <Lightbox
        index={lightbox.selected}
        slides={slides}
        open={lightbox.open}
        close={lightbox.onClose}
        onGetCurrentIndex={(index) => lightbox.setSelected(index)}
      />
    </>
  );
}
