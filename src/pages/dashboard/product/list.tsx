import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ProductListView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sản phẩm | Trang chủ - ${CONFIG.site.name}` };

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
