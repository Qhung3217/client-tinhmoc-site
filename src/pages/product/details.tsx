import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

// import { ProductShopDetailsView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

const metadata = { title: `Sản phẩm - ${CONFIG.site.name}` };

export default function Page() {
  // const { id = '' } = useParams();

  // const { product, productLoading, productError } = useGetProduct(slug);

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      {/* <ProductShopDetailsView product={product} loading={productLoading} error={productError} /> */}
    </>
  );
}
