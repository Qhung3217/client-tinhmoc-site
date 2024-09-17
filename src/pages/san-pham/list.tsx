import { Helmet } from 'react-helmet-async';

import ProductListView from 'src/sections/@landing/product/view/product-list-view';

// ----------------------------------------------------------------------

const metadata = { title: `Sản phầm` };

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
