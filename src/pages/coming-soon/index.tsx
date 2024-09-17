import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ComingSoonView } from 'src/sections/coming-soon/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sắp ra mắt - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ComingSoonView />
    </>
  );
}
