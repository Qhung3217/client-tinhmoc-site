import { m, useAnimationControls } from 'framer-motion';

import { Stack, ButtonBase } from '@mui/material';

import { Image } from 'src/components/image';
import { SvgColor } from 'src/components/svg-color';
import { MuiBox } from 'src/components/@mui/mui-box';
import { Carousel, useCarousel } from 'src/components/carousel';

import { SubTitle, SectionTitle } from '../_common/section-title';

const slides = [
  '/assets/landing/hero/slides/slider-01.jpg',
  '/assets/landing/hero/slides/slider-02.jpg',
  '/assets/landing/hero/slides/slider-03.jpg',
  '/assets/landing/hero/slides/slider-04.jpg',
];
const buttonStyles = {
  flexShrink: 0,
  '& .mnl__svg__color__root': {
    width: 64,
    height: 64,
    backgroundColor: '#1e6588',
  },
};
export default function HomeFeatured() {
  const carousel = useCarousel({ loop: true });
  const buttonPrevControl = useAnimationControls();
  const buttonNextControl = useAnimationControls();

  const buttonPrevAnimate = {
    x: [0, 10, 20, 10, 0],
  };
  const buttonNextAnimate = {
    x: [0, -10, -20, -10, 0],
  };
  return (
    <MuiBox sx={{ position: 'relative' }} component="section">
      <Carousel carousel={carousel}>
        {slides.map((slide, index) => (
          <MuiBox sx={{ position: 'relative' }} key={slide + index}>
            <Image visibleByDefault alt={slide} src={slide} ratio={{ xs: '4/3', sm: '16/10' }} />
          </MuiBox>
        ))}
      </Carousel>
      <Stack direction="row" alignItems="center" sx={{ py: 6.25, backgroundColor: '#1a1a1a' }}>
        <MuiBox
          component={m.div}
          sx={{
            display: {
              sm: 'block',
              xs: 'none',
            },
          }}
          animate={buttonPrevControl}
          transition={{
            type: 'easeInOut',
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
          }}
          onHoverStart={() => {
            buttonPrevControl.start(buttonPrevAnimate);
          }}
          onHoverEnd={() => {
            buttonPrevControl.set({
              x: 0,
            });
            buttonPrevControl.stop();
          }}
        >
          <ButtonBase sx={buttonStyles} onClick={carousel.arrows.onClickPrev}>
            <SvgColor src="/assets/landing/icons/prv.svg" />
          </ButtonBase>
        </MuiBox>
        <MuiBox
          flexGrow={1}
          display="flex"
          alignItems="center"
          sx={{
            px: { xs: 2, sm: 10, md: 14 },
            maxWidth: 1200,
            mx: 'auto',
            flexDirection: {
              md: 'row',
              xs: 'column',
            },
          }}
        >
          <SectionTitle
            sx={{
              width: { xs: 1, md: '50%' },
              display: 'inline-block',
            }}
          >
            Về sản phẩm của chúng tôi
          </SectionTitle>
          <SubTitle
            sx={{
              width: { xs: 1, md: '50%' },
              display: 'inline-block',
              textAlign: { xs: 'center', md: 'right' },
            }}
          >
            Mỗi cánh cửa sẽ mở ra một không gian mới,
            <br /> mang lại niềm vui, hạnh phúc và sự an lành.
          </SubTitle>
        </MuiBox>
        <MuiBox
          component={m.div}
          sx={{
            display: {
              sm: 'block',
              xs: 'none',
            },
          }}
          animate={buttonNextControl}
          transition={{
            type: 'easeInOut',
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
          }}
          onHoverStart={() => {
            buttonNextControl.start(buttonNextAnimate);
          }}
          onHoverEnd={() => {
            buttonNextControl.set({
              x: 0,
            });
            buttonNextControl.stop();
          }}
        >
          <ButtonBase sx={buttonStyles} onClick={carousel.arrows.onClickNext}>
            <SvgColor src="/assets/landing/icons/next.svg" />
          </ButtonBase>
        </MuiBox>
      </Stack>
    </MuiBox>
  );
}
