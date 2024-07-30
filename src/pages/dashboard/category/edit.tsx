import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { CONFIG } from 'src/config-global';
import { useGetCategory } from 'src/actions/category';

import { CategoryEditView } from 'src/sections/category/view';

// ----------------------------------------------------------------------

const metadata = { title: `Loại sản phẩm | ${CONFIG.site.name}` };

export default function Page() {
  const { id = '' } = useParams();

  const { category } = useGetCategory(id);

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <CategoryEditView category={category} />
    </>
  );
}
