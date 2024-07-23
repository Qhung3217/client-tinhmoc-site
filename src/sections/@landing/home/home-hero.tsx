import './style.css';

import { useRef } from 'react';
import { m } from 'framer-motion';
import { Snowfall } from 'react-snowfall';

import { Box, Container } from '@mui/material';

import { useClientRect } from 'src/hooks/use-client-rect';
import { useScrollOffSetTop } from 'src/hooks/use-scroll-offset-top';

import { Logo } from 'src/components/logo';
import { Image } from 'src/components/image';

import { SubTitle, SectionTitle } from '../_common/section-title';

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
  },
  hidden: {
    opacity: 0,
    scale: 0.4,
  },
};
export default function HomeHero() {
  const { offsetTop } = useScrollOffSetTop();
  const ref = useRef<any>();
  const { width } = useClientRect(ref);
  return (
    <Box
      sx={{ position: 'relative', width: 1, backgroundColor: '#1a1a1a', pb: 12.5 }}
      component="section"
    >
      <Box width={1} textAlign="center" sx={{ ml: { xs: 0, sm: -1, md: -1 } }}>
        <Logo disableLink width={70} height={80} />
      </Box>
      <Container sx={{ pb: 2.5, '&.MuiContainer-root': { px: 0 } }} ref={ref}>
        <Box
          width={1}
          display={{
            xs: 'block',
            sm: 'none',
          }}
        >
          <Image src="/assets/landing/hero/first-door.png" alt="door" />
        </Box>
        <Box
          component={m.div}
          variants={variants}
          // initial="close"
          // animate={offsetTop ? 'open' : 'close'}
          // animate={controls}
          display={{
            sm: 'block',
            xs: 'none',
          }}
          width={1}
          sx={{
            backgroundImage: 'url(/assets/landing/hero/firstVideo.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0% 0px',

            backgroundSize: 'cover',
            height: width * 0.55 > 675 ? 675 : width * 0.55,
          }}
          className={offsetTop ? 'videoOnOpen' : 'videoOnClose'}
        />
      </Container>
      <Box
        width={1}
        textAlign="center"
        component={m.div}
        variants={variants}
        initial="hidden"
        animate={offsetTop ? 'visible' : 'hidden'}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 0.3,
          delay: 0.2,
        }}
      >
        <SubTitle>Chào mừng quý khách đến với chúng tôi</SubTitle>
        <SectionTitle>TINH MỘC DOORS</SectionTitle>
      </Box>
      <Snowfall snowflakeCount={30} color="#caa87d" radius={[0.5, 1.3]} />
    </Box>
  );
}
