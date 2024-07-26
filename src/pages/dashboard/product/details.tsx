import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { useGetProduct } from 'src/actions/product';

import { ProductDetailsView } from 'src/sections/product/view/product-details-view';

// ----------------------------------------------------------------------

const metadata = { title: `Sản phẩm | ${CONFIG.site.name}` };

export default function Page() {
  const { id = '' } = useParams();

  const { product, productLoading, productError } = useGetProduct(id);

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ProductDetailsView product={product} loading={productLoading} error={productError} />
    </>
  );
}
