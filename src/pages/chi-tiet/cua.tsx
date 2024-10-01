import { Helmet } from 'react-helmet-async';

import { useGetProduct } from 'src/actions/product';

import ProductDetailsView from 'src/sections/@landing/product/view/product-detail-view';

export default function DoorDetailPage() {
  const { product, productLoading, productError } = useGetProduct('IIT-001');
  return (
    <>
      <Helmet>
        <title> {product?.title || 'Sản phẩm'}</title>
      </Helmet>

      <ProductDetailsView product={product} loading={productLoading} error={productError} />
    </>
  );
}
