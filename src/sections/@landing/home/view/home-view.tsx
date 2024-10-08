import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import HomeHero from '../home-hero';
import HomeDoors from '../home-doors';
import HomeBrief from '../home-brief';
import HomeDetail from '../home-detail';
import HomeContact from '../home-contact';
import HomeTrusted from '../home-trusted';
import HomeIntroduce from '../home-introduce';

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
        {/* <HomeFeatured /> */}
        <HomeBrief />
        <HomeIntroduce />
        <HomeTrusted />
        {/* <HomeAbout /> */}
        <HomeDetail />
        <HomeDoors />
        <HomeContact />
      </Stack>
    </>
  );
}
