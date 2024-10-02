import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { OverviewAppView } from 'src/sections/overview/app/view';

// ----------------------------------------------------------------------

const metadata = { title: `Dashboard - ${CONFIG.site.name}` };

export default function OverviewAppPage() {
  const navigate = useNavigate();
  navigate(paths.dashboard.product.root);
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <OverviewAppView />
    </>
  );
}
