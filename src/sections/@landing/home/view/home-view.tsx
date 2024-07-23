import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import HomeHero from '../home-hero';
import HomeAbout from '../home-about';
import HomeDoors from '../home-doors';
import HomeDetail from '../home-detail';
import HomeFeatured from '../home-featured';

// ----------------------------------------------------------------------

export function HomeView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTop />

      <HomeHero />

      <Stack sx={{ position: 'relative' }}>
        <HomeFeatured />
        <HomeAbout />
        <HomeDetail />
        <HomeDoors />
      </Stack>
    </>
  );
}
