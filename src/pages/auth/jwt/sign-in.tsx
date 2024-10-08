import { Helmet } from 'react-helmet-async';

import { JwtSignInView } from 'src/sections/auth/jwt';

// ----------------------------------------------------------------------

const metadata = { title: `Đăng nhập` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <JwtSignInView />
    </>
  );
}
