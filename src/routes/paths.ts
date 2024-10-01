export const ROOTS = {
  AUTH: '/auth',
  AUTH_DEMO: '/auth-demo',
  DASHBOARD: '/quan-tri',
  LANDING: '/',
};

// ----------------------------------------------------------------------

export const paths = {
  /* ------------------ MY APP ------------------ */
  landing: {
    product: {
      root: '/san-pham',
      category: (category: string) => `/san-pham?category=${category}`,
      subCategory: (category: string, subCategory: string) =>
        `/san-pham?category=${category}&subCategory=${subCategory}`,
      details: (slug: string | number) => `${ROOTS.LANDING}san-pham/${slug}`,
      cua: `${ROOTS.LANDING}cua`,
      ban_ghe: `${ROOTS.LANDING}ban-ghe`,
      ke: `${ROOTS.LANDING}ke`,
    },
  },
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  page403: '/error/403',
  page404: '/error/404',
  page500: '/error/500',
  /* ---------------- END MY APP ---------------- */

  // AUTH
  auth: {
    jwt: {
      signIn: `${ROOTS.AUTH}/jwt/sign-in`,
      signUp: `${ROOTS.AUTH}/jwt/sign-up`,
    },
  },

  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,

    product: {
      root: `${ROOTS.DASHBOARD}/san-pham`,
      new: `${ROOTS.DASHBOARD}/san-pham/tao-moi`,
      details: (id: string) => `${ROOTS.DASHBOARD}/san-pham/${id}`,
      edit: (id: string) => `${ROOTS.DASHBOARD}/san-pham/${id}/chinh-sua`,
    },
    category: {
      root: `${ROOTS.DASHBOARD}/loai-san-pham`,
      new: `${ROOTS.DASHBOARD}/loai-san-pham/tao-moi`,
      details: (id: string) => `${ROOTS.DASHBOARD}/loai-san-pham/${id}`,
      edit: (id: string) => `${ROOTS.DASHBOARD}/loai-san-pham/${id}/chinh-sua`,
    },
  },
};
