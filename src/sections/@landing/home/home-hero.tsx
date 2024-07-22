import './style.css';

import { m } from 'framer-motion';
import { Snowfall } from 'react-snowfall';

import { Box, Container, Typography } from '@mui/material';

import { useScrollOffSetTop } from 'src/hooks/use-scroll-offset-top';

import { Logo } from 'src/components/logo';
import { Image } from 'src/components/image';

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

  return (
    <Box sx={{ position: 'relative', width: 1, height: '100vh', backgroundColor: '#1a1a1a' }}>
      <Box width={1} textAlign="center">
        <Logo disableLink width={70} height={80} />
      </Box>
      <Container sx={{ pb: 2.5, '&.MuiContainer-root': { px: 0 } }}>
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
          width={1}
          sx={{
            backgroundImage: 'url(/assets/landing/hero/firstVideo.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0% 0px',
            backgroundSize: 'cover',
            height: 675,
          }}
          className={offsetTop ? 'videoOnOpen' : 'videoOnClose'}
        />
      </Container>
      <Box
        width={1}
        textAlign="center"
        sx={{ mb: 12.5 }}
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
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 200,
            letterSpacing: 2,
            lineHeight: 1.5,
            color: '#868686',
          }}
        >
          Chào mừng quý khách đến với chúng tôi
        </Typography>
        <Typography
          sx={{
            color: 'primary.main',
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: 2,
            lineHeight: 1.8,
          }}
        >
          TINH MỘC DOORS
        </Typography>
      </Box>
      <Snowfall snowflakeCount={30} color="#caa87d" radius={[0.5, 1.3]} />
    </Box>
  );
}
