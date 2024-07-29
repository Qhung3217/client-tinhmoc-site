import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { config } from 'react-spring';
import Carousel from 'react-spring-3d-carousel';

import { Box } from '@mui/material';

import { uuidv4 } from 'src/utils/uuidv4';

import { SubTitle, SectionTitle } from '../_common/section-title';

export default function HomeDoors() {
  const [nextSlide, setNextSlide] = useState(0);
  const slides = [
    {
      key: uuidv4(),
      content: <img alt="" src="/assets/landing/doors/1L01.jpg" />,
    },
    {
      key: uuidv4(),
      content: <img alt="" src="/assets/landing/doors/2C02-G.jpg" />,
    },
    {
      key: uuidv4(),
      content: <img alt="" src="/assets/landing/doors/2C02.jpg" />,
    },
    {
      key: uuidv4(),
      content: <img alt="" src="/assets/landing/doors/2L01.jpg" />,
    },
    {
      key: uuidv4(),
      content: <img alt="" src="/assets/landing/doors/2S01.jpg" />,
    },
    {
      key: uuidv4(),
      content: <img alt="" src="/assets/landing/doors/3C02.jpg" />,
    },
    {
      key: uuidv4(),
      content: <img alt="" src="/assets/landing/doors/3S02.jpg" />,
    },
    {
      key: uuidv4(),
      content: <img alt="" src="/assets/landing/doors/5L01.jpg" />,
    },
  ].map((slide, index) => ({ ...slide, onClick: () => setNextSlide(index) }));

  return (
    <Box
      component="section"
      sx={{
        pt: 25,
        backgroundColor: '#1a1a1a',
      }}
    >
      <Box position="relative" width={673} height={600} mx="auto">
        {/* <Carousel carousel={carousel}>
          {slides.map((slide) => (
            <Box sx={{ position: 'relative' }} key={slide.title}>
              <Image visibleByDefault alt={slide.title} src={slide.url} />
            </Box>
          ))}
        </Carousel> */}
        <Carousel
          slides={slides}
          goToSlide={nextSlide}
          showNavigation={false}
          animationConfig={config.stiff}
          offsetRadius={3}
        />
      </Box>
      <Box
        sx={{
          py: 7.5,
          px: 2.5,
          pb: 13.75,
        }}
      >
        <SectionTitle>KIỂU DÁNG</SectionTitle>
        <SubTitle>
          Có nhiều kiểu dáng để chọn <br /> Có hoạ sĩ thiết kế theo mẫu riêng <br />& có cả một đội
          ngũ phục vụ quý khách
        </SubTitle>
      </Box>
    </Box>
  );
}
