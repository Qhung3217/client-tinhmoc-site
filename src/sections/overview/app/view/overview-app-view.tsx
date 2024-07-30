import Grid from '@mui/material/Unstable_Grid2';

import { useGetProducts } from 'src/actions/product';
import { DashboardContent } from 'src/layouts/dashboard';
import { useGetCategoriesCount } from 'src/actions/category';

import { AppNewInvoice } from '../app-new-invoice';
import { AppAreaInstalled } from '../app-area-installed';
import { AppWidgetSummary } from '../app-widget-summary';

// ----------------------------------------------------------------------

export function OverviewAppView() {
  const { categories } = useGetCategoriesCount();
  const { data } = useGetProducts(5, 0, '', []);

  return (
    <DashboardContent maxWidth="xl">
      <Grid container spacing={3}>
        {/* <Grid xs={12} md={8}>
          <AppWelcome
            title={`Welcome back 👋 \n ${user?.displayName}`}
            description="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
            img={<SeoIllustration hideBackground />}
            action={
              <Button variant="contained" color="primary">
                Go now
              </Button>
            }
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppFeatured list={_appFeatured} />
        </Grid> */}

        {categories
          .filter((item) => item.level === 1)
          .map((item) => (
            <Grid key={item.id} xs={12} md={4}>
              <AppWidgetSummary
                title={item.name}
                percent={2.6}
                total={item.count}
                chart={{
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                  series: [15, 18, 12, 51, 68, 11, 39, 37],
                }}
              />
            </Grid>
          ))}

        <Grid xs={12} md={12} lg={12}>
          <AppAreaInstalled
            title="Thống kê số lượng sản phẩm"
            subheader=""
            chart={{
              categories: categories.filter((c) => c.level === 2).map((item) => item.name),
              series: [
                {
                  name: '2024',
                  data: [
                    {
                      name: 'Sản phẩm',
                      data: categories.filter((c) => c.level === 2).map((item) => item.count),
                    },
                  ],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} lg={12}>
          <AppNewInvoice
            title="Top sản phẩm"
            tableData={data.products}
            headLabel={[
              { id: 'slug', label: 'Mã sản phẩm' },
              { id: 'title', label: 'Tên sản phẩm' },
              { id: 'priority', label: 'Độ ưu tiên' },
              { id: 'price', label: 'Giá' },
              { id: 'salePercent', label: 'Giảm giá' },
            ]}
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={4}>
          <AppTopRelated title="Related applications" list={_appRelated} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppTopInstalledCountries title="Top installed countries" list={_appInstalled} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppTopAuthors title="Top authors" list={_appAuthors} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
            <AppWidget
              title="Conversion"
              total={38566}
              icon="solar:user-rounded-bold"
              chart={{ series: 48 }}
            />

            <AppWidget
              title="Applications"
              total={55566}
              icon="fluent:mail-24-filled"
              chart={{
                series: 75,
                colors: [theme.vars.palette.info.light, theme.vars.palette.info.main],
              }}
              sx={{ bgcolor: 'info.dark', [`& .${svgColorClasses.root}`]: { color: 'info.light' } }}
            />
          </Box>
        </Grid> */}
      </Grid>
    </DashboardContent>
  );
}
