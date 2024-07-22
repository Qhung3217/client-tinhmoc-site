import { m, useAnimationControls } from 'framer-motion';

import { Box, ButtonBase, Typography } from '@mui/material';

import { Image } from 'src/components/image';
import { SvgColor } from 'src/components/svg-color';
import { Carousel, useCarousel } from 'src/components/carousel';

const slides = [
  '/assets/landing/about/company-1.jpg',
  '/assets/landing/about/company-2.jpg',
  '/assets/landing/about/company-02a.jpg',
  '/assets/landing/about/company-3.jpg',
  '/assets/landing/about/company-4.jpg',
  '/assets/landing/about/company-5.jpg',
  '/assets/landing/about/company-6.jpg',
];
const buttonStyles = {
  flexShrink: 0,
  '& .mnl__svg__color__root': {
    width: 64,
    height: 150,
    backgroundColor: '#1e6588',
  },
};
export default function HomeAbout() {
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
    <Box
      sx={{
        backgroundImage: 'url(/assets/landing/about/bg-intro-2.jpg)',
        backgroundRepeat: 'no-repeat',
        pt: 10,
        pb: 12.5,
      }}
    >
      <Box
        sx={{
          pt: 15.625,
          px: '10px',
        }}
      >
        <Typography
          color="primary.main"
          sx={{
            mx: 'auto',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: 30,
            fontWeight: 600,
            lineHeight: '54px',
            width: { xs: 1, md: 850 },
            borderBottom: '1px solid #49a3d375',
          }}
        >
          Tinh Mộc Doors
        </Typography>
        <Typography
          color="#d7ad5d"
          sx={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: 2,
            lineHeight: '27px',
          }}
        >
          Thành lập năm 2009
        </Typography>
      </Box>
      <Box
        sx={{
          position: 'relative',

          width: 850,
          height: 850,
          mx: 'auto',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            left: -68,
            zIndex: 1,
          }}
        >
          <m.div
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
          </m.div>
        </Box>
        <Carousel
          carousel={carousel}
          sx={{
            borderRadius: 2,
            clipPath: 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)',
          }}
        >
          {slides.map((slide) => (
            <Box sx={{ position: 'relative' }}>
              <Image visibleByDefault alt={slide} src={slide} ratio="1/1" />
            </Box>
          ))}
        </Carousel>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            right: -68,
            zIndex: 1,
          }}
        >
          <m.div
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
          </m.div>
        </Box>
      </Box>

      <Box
        sx={{
          textAlign: 'center',
          color: '#868686',

          fontSize: 18,
          letterSpacing: 2,
          lineHeight: '27px',
        }}
      >
        Giá trị của sản phẩm Tinh Mộc được tạo thành
        <br />
        từ vật liệu gỗ tự nhiên có chất lượng cao,
        <br />
        công nghệ hiện đại, qui trình sản xuất khép kín
        <br />
        và đội ngũ chuyên viên kỹ thuật.
      </Box>
    </Box>
  );
}
