import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { CategoryListView } from 'src/sections/category/view';

// ----------------------------------------------------------------------

const metadata = { title: `Loại sản phẩm | ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <CategoryListView />
    </>
  );
}
