import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import ProductListView from 'src/sections/@landing/product/view/product-list-view';

// ----------------------------------------------------------------------

const metadata = { title: `Product shop - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ProductListView />
    </>
  );
}
