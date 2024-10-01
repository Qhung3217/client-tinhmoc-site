import './style.css';

import { useRef } from 'react';
import { m } from 'framer-motion';
import { Snowfall } from 'react-snowfall';

import { Container } from '@mui/material';

import { useClientRect } from 'src/hooks/use-client-rect';
import { useScrollOffSetTop } from 'src/hooks/use-scroll-offset-top';

import { Logo } from 'src/components/logo';
import { MuiBox } from 'src/components/@mui/mui-box';

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
    <MuiBox
      sx={{
        position: 'relative',
        width: 1,
        backgroundColor: '#1a1a1a',
        pb: 12.5,
        pt: 1,
        overflow: 'hidden',
      }}
      component="section"
    >
      <MuiBox
        width={1}
        textAlign="center"
        sx={{
          height: { xs: 80, md: 70 },
          display: {
            xs: 'block',
            md: 'none',
          },
        }}
      >
        <Logo disableLink width={80} height={80} />
      </MuiBox>
      <Container sx={{ pb: 2.5, '&.MuiContainer-root': { px: 0 }, overflow: 'hidden' }} ref={ref}>
        <MuiBox
          component={m.div}
          variants={variants}
          // display={{
          //   sm: 'block',
          //   xs: 'none',
          // }}
          width={1}
          sx={{
            backgroundImage: 'url(/assets/landing/hero/firstVideo.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0% 0px',

            backgroundSize: 'cover',
            height: width === 1200 || width * 0.56 >= 675 ? 675 : width * 0.56,
          }}
          className={offsetTop ? 'videoOnOpen' : 'videoOnClose'}
        />
      </Container>
      <MuiBox
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
      </MuiBox>
      <Snowfall snowflakeCount={30} color="#caa87d" radius={[0.5, 1.3]} />
    </MuiBox>
  );
}
