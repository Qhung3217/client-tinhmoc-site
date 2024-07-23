import { Helmet } from 'react-helmet-async';

import { HomeView } from 'src/sections/@landing/home/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'TINH MỘC DOORS',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <HomeView />
    </>
  );
}
