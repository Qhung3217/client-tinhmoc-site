import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

const metadata = { title: `Sản phẩm | Trang chủ - ${CONFIG.site.name}` };

export default function Page() {
  // const { id = '' } = useParams();

  // const { product, productLoading, productError } = useGetProduct(id);

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      {/* <ProductDetailsView product={product} loading={productLoading} error={productError} /> */}
    </>
  );
}
