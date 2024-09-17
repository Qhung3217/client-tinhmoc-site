import { Helmet } from 'react-helmet-async';

import { View403 } from 'src/sections/error';

// ----------------------------------------------------------------------

const metadata = { title: `403 Hạn chế truy cập!` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <View403 />
    </>
  );
}
