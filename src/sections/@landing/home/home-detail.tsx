import './style.css';

import { m } from 'framer-motion';
import { useRef, useState } from 'react';

import { Box, Stack, Container } from '@mui/material';

import useOnScreen from 'src/hooks/use-on-screen';
import { useClientRect } from 'src/hooks/use-client-rect';

import { Image } from 'src/components/image';
import { CustomModal } from 'src/components/custom-modal';

import DoorDetailTooltips from './_partials/door-detail-tooltips';
import { SubTitle, SectionTitle } from '../_common/section-title';

const variants = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.7,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const POPUPS = [
  {
    thumbnail: '/assets/landing/detail/okhoa.jpg',
    popupLink: '/assets/landing/detail/okhoa.jpg',
  },
  {
    thumbnail: '/assets/landing/detail/banle.jpg',
    popupLink: '/assets/landing/detail/banle.jpg',
  },
  {
    thumbnail: '/assets/landing/detail/dc-02.jpg',
    popupLink: '/assets/landing/detail/dc-02.jpg',
  },
  {
    thumbnail: '/assets/landing/detail/dc-03.jpg',
    popupLink: '/assets/landing/detail/dc-03.jpg',
  },
  {
    thumbnail: '/assets/landing/detail/dc-04.jpg',
    popupLink: '/assets/landing/detail/dc-04.jpg',
  },
  {
    thumbnail: '/assets/landing/detail/dc-05.jpg',
    popupLink: '/assets/landing/detail/dc-05.jpg',
  },
  {
    thumbnail: '/assets/landing/detail/cover.jpg',
    popupLink: () => (
      <Box
        component="iframe"
        src="https://www.youtube.com/embed/jq4FICAUsGU?autoplay=1"
        title="Tinhmoc"
        allow="autoplay"
        referrerPolicy="strict-origin-when-cross-origin"
        sx={{
          width: 1,
          height: 1,
          aspectRatio: '2/1',
          display: 'block',
          border: 'none',
        }}
      />
    ),
    isNode: true,
  },
];

export default function HomeDetail() {
  const ref = useRef<any>();
  const [elementRef, isIntersecting] = useOnScreen({
    rootMargin: '50px',
  });
  const { width } = useClientRect(ref);
  const [modalValue, setModalValue] = useState<{
    thumbnail: string;
    popupLink: any;
    isNode?: boolean;
  } | null>(null);

  return (
    <Box component="section" sx={{ pt: 20, backgroundColor: '#1a1a1a', pb: 14.375 }}>
      <Container sx={{ pb: 2.5, '&.MuiContainer-root': { px: 0 } }} ref={ref}>
        <Box
          width={1}
          display={{
            xs: 'block',
            sm: 'none',
          }}
        >
          <Image src="/assets/landing/detail/second-door-mobile.jpg" alt="door" />
        </Box>
        <Box
          width={1}
          display={{
            sm: 'block',
            xs: 'none',
          }}
          sx={{
            backgroundImage: 'url(/assets/landing/detail/secondVideo.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0% 0px',
            backgroundSize: 'cover',
            height: width * 0.55 > 675 ? 675 : width * 0.55,
            position: 'relative',
          }}
          className={isIntersecting ? 'videoOnOpen' : 'videoOnClose'}
          ref={elementRef}
        >
          <Box
            width={1}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            component={m.div}
            variants={variants}
            initial="hidden"
            animate={isIntersecting ? 'visible' : 'hidden'}
          >
            <Image src="/assets/landing/detail/second-door.png" alt="door" />
          </Box>
          <DoorDetailTooltips />
        </Box>
      </Container>

      <Container sx={{ pt: 2.5, pb: 2.5, '&.MuiContainer-root': { px: 0 } }}>
        <SectionTitle>Kết cấu cánh cửa</SectionTitle>
        <SubTitle>
          Mỗi cánh cửa thành phẩm có nhiều chi tiết
          <br />
          Mỗi chi tiết được dụng công để tạo nên sự hoàn hảo
        </SubTitle>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1.25}
          flexWrap="wrap"
          sx={{ mt: 2.5, maxWidth: 1120, mx: 'auto' }}
        >
          {POPUPS.map((popup, index) => (
            <Box
              key={popup.thumbnail + index}
              onClick={() => {
                setModalValue(popup);
              }}
              sx={{
                cursor: 'pointer',
                position: 'relative',
                boxShadow: '0 0 0pt 1pt rgba(255,255,255,0.2)',
                borderRadius: '10px',
                overflow: 'hidden',
                width: 1,
                height: 1,
                maxWidth: 150,
              }}
            >
              <Image
                src={popup.thumbnail}
                alt="Kết cấu cánh cửa"
                slotProps={{
                  overlay: {
                    backgroundColor: 'primary.main',
                    filter: 'opacity(0.5)',

                    '&:hover': {
                      backgroundColor: 'transparent',
                      filter: 'unset',
                    },
                  },
                }}
              />
            </Box>
          ))}
        </Stack>
      </Container>
      <CustomModal open={!!modalValue} onClose={() => setModalValue(null)}>
        {modalValue?.isNode ? (
          modalValue?.popupLink && modalValue.popupLink()
        ) : (
          <Box width={1} height={1}>
            <Image src={modalValue?.popupLink as string} alt="Kết cấu cánh cửa" />
          </Box>
        )}
      </CustomModal>
    </Box>
  );
}
