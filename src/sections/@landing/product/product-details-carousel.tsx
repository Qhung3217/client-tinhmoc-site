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

import ProductDetal3D from './product-detail-3d';

// ----------------------------------------------------------------------

type Props = {
  images?: IProductItem['images'];
  link3d?: string;
};

export function ProductDetailsCarousel({ images, link3d }: Props) {
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
          <Box
            sx={{
              bottom: 64,
              right: 16,
              position: 'absolute',
              zIndex: 1,
            }}
          >
            <ProductDetal3D link3d={link3d} />
          </Box>

          <Carousel carousel={carousel} sx={{ maxWidth: 500, mx: 'auto' }}>
            {slides.map((slide) => (
              <Image
                key={slide.src}
                alt={slide.src}
                src={slide.src}
                ratio="1/1"
                onClick={() => lightbox.onOpen(slide.src)}
                effect="opacity"
                sx={{
                  cursor: 'zoom-in',
                  maxWidth: 600,
                  borderRadius: 0.5,

                  '& .mnl__image__wrapper': {
                    aspectRatio: '1/1',
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
                aspectRatio: '1/1',
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
