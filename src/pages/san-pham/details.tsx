import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { useGetProduct } from 'src/actions/product';

import ProductDetailsView from 'src/sections/@landing/product/view/product-detail-view';

export default function ProductDetailsPage() {
  const { id = '' } = useParams();

  const { product, productLoading, productError } = useGetProduct(id);
  return (
    <>
      <Helmet>
        <title> {product?.name || 'Sản phẩm'}</title>
      </Helmet>

      <ProductDetailsView product={product} loading={productLoading} error={productError} />
    </>
  );
}
