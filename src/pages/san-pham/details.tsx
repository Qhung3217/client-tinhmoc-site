import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { useGetProduct } from 'src/actions/product';

import ProductDetailsView from 'src/sections/@landing/product/view/product-detail-view';

export default function ProductDetailsPage() {
  const { slug = '' } = useParams();

  const { product, productLoading, productError } = useGetProduct(slug);
  return (
    <>
      <Helmet>
        <title> {product?.title || 'Sản phẩm'}</title>
      </Helmet>

      <ProductDetailsView product={product} loading={productLoading} error={productError} />
    </>
  );
}
