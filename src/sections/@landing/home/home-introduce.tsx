import type { BoxProps, TypographyProps } from '@mui/material';

import { useTheme, Container, Typography } from '@mui/material';

import { shadows } from 'src/theme/core';

import { Image } from 'src/components/image';
import { Grid } from 'src/components/Grid/mui';
import { MuiBox } from 'src/components/@mui/mui-box';

export default function HomeIntroduce() {
  const theme = useTheme();
  return (
    <Container
      maxWidth={false}
      sx={{
        py: 8,
        backgroundImage: 'url(/assets/landing/about/bg-intro-2.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        px: {
          lg: '0px !important',
        },
      }}
    >
      <Grid
        container
        spacing={{
          xs: 3,
          sm: 3,
          md: 2,
          lg: 0,
        }}
      >
        {/* ------------------- ROW 1 ------------------  */}

        <Grid
          xs={12}
          md={6}
          lg={6}
          sx={{
            position: 'relative',
          }}
        >
          <MuiBox
            sx={{
              display: 'block',
            }}
          >
            <MuiBox>
              <Image
                src="/assets/landing/about/company-6.jpg"
                alt="About Tinh Moc"
                minWidth={200}
                sx={{
                  boxShadow: shadows('light'),
                  aspectRatio: { xs: 'auto 800 / 639', lg: 'auto 970 / 640' },
                }}
              />
            </MuiBox>
            <TextBox
              maxWidth={{ lg: 200, xl: 270 }}
              sx={{
                position: { xs: 'static', lg: 'absolute' },
                top: 0,
                right: { lg: -20, xl: -47 },
                transform: { xs: 'auto 800 / 639', lg: 'translateX(100%)' },
              }}
              title={
                <>
                  Kinh nghiệm
                  <MuiBox
                    component="br"
                    sx={{
                      display: {
                        xs: 'none',
                        lg: 'block',
                      },
                    }}
                  />{' '}
                  dày dặn
                </>
              }
              subTitle="Hơn 10 năm kinh nghiệm chế tác được đúc kết trong từng sản phẩm"
            />
          </MuiBox>
        </Grid>

        <Grid xs={12} md={6}>
          <MuiBox
            sx={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              ml: {
                md: 'auto',
              },
              width: 'fit-content',
            }}
          >
            <MuiBox
              maxWidth={{
                lg: 350,
                xl: 470,
              }}
              sx={{
                [theme.breakpoints.between(1500, 1650)]: {
                  maxWidth: 430,
                },
                width: 1,
              }}
            >
              <Image
                src="/assets/landing/about/company-1.jpg"
                alt="About Tinh Moc"
                minWidth={200}
                sx={{
                  boxShadow: shadows('light'),
                  aspectRatio: { xs: 'auto 800 / 639', lg: 'auto 553 / 600' },
                }}
              />
            </MuiBox>
            <TextBox
              title={
                <>
                  Sự tận tâm và
                  <MuiBox
                    component="br"
                    sx={{
                      display: {
                        xs: 'none',
                        lg: 'block',
                      },
                    }}
                  />{' '}
                  am hiểu
                </>
              }
              subTitle="Tinh Mộc cùng bạn lựa chọn các vật liệu gỗ phù hợp với sự tận tâm và am hiểu"
              maxWidth={{ lg: 190, xl: 225 }}
              sx={{
                position: { xs: 'static', lg: 'absolute' },
                bottom: 0,
                left: {
                  lg: -20,

                  xl: -70,
                },
                [theme.breakpoints.between(1500, 1650)]: { left: -40 },

                transform: { xs: 'none', lg: 'translateX(-100%)' },
              }}
            />
          </MuiBox>
        </Grid>

        {/* ------------------- ROW 2 ------------------ */}
        <Grid xs={12} md={6} sx={{}}>
          <MuiBox
            sx={{
              mt: {
                lg: 10,
                xl: 12.25,
              },

              display: 'flex',
              flexDirection: {
                xs: 'column',
                lg: 'row',
              },
              justifyContent: 'flex-end',
            }}
          >
            <MuiBox
              sx={{
                maxWidth: {
                  lg: 360,
                  xl: 410,
                },
              }}
            >
              <Image
                src="/assets/landing/about/company-4.jpg"
                alt="About Tinh Moc"
                minWidth={200}
                sx={{
                  boxShadow: shadows('light'),
                  aspectRatio: 'auto 800 / 639',
                }}
              />
            </MuiBox>
            <TextBox
              maxWidth={{ xs: 1, lg: 100, xl: 160 }}
              sx={{ pl: { xs: 0 }, ml: { lg: 2, xl: 7.75 } }}
              title="Sự kết hợp hoàn hảo"
              subTitle="Sự kết hợp hoàn hảo giữa nguồn vật liệu gỗ tự nhiên
              cao cấp và ứng dụng công nghệ cao"
            />
          </MuiBox>
        </Grid>

        <Grid xs={12} md={6}>
          <MuiBox
            sx={{
              ml: {
                xs: 0,
                lg: 10,
                xl: 15,
              },
              mt: { xs: 0, lg: -1, xl: -3 },
              display: 'flex',
              alignItems: { xs: 'flex-start' },
              flexDirection: 'column',
            }}
          >
            <MuiBox
              sx={{
                maxWidth: { lg: 400, xl: 545 },
              }}
            >
              <Image
                src="/assets/landing/about/company-5.jpg"
                alt="About Tinh Moc"
                minWidth={200}
                sx={{
                  boxShadow: shadows('light'),

                  aspectRatio: { xs: 'auto 800 / 639', lg: 'auto 850 / 540' },
                }}
              />
            </MuiBox>
            <TextBox
              maxWidth={{ lg: 400, xl: 545 }}
              sx={{
                mt: { xl: 3.45 },
              }}
              title="Đội ngũ chuyên nghiệp"
              subTitle="Đội ngũ chuyên viên kỹ thuật giàu kinh nghiệm đã góp phần mang lại những sản phẩm
              tinh tế, bền vững và mang đậm dấu ấn thủ công"
            />
          </MuiBox>
        </Grid>
      </Grid>
    </Container>
  );
}

type TextBoxProps = Omit<BoxProps, 'children' | 'title'> & {
  title: any;
  subTitle: any;
  spaceLeft?: boolean;
  slots?: {
    titleProps?: Omit<TypographyProps, 'children'>;
    subTitleProps?: Omit<TypographyProps, 'children'>;
  };
};
function TextBox({ title, subTitle, slots, spaceLeft, ...boxProps }: TextBoxProps) {
  return (
    <MuiBox
      maxWidth={{ md: 200 }}
      sx={{
        ...(spaceLeft && {
          ml: 'auto',
          mr: { sm: 1, lg: 2 },
        }),
        ...boxProps?.sx,
      }}
      {...boxProps}
    >
      <Typography
        sx={{
          color: 'primary.main',
          pt: 1,
          mb: { xs: 0, lg: 2 },
          typography: {
            xs: 'h3',
            sm: 'h3',
            md: 'h4',
            lg: 'h5',
            xl: 'h4',
          },
          ...slots?.titleProps?.sx,
        }}
        {...slots?.titleProps}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: 'white',
          typography: {
            xs: 'body1',
            lg: 'body2',
          },
        }}
        {...slots?.subTitleProps}
      >
        {subTitle}
      </Typography>
    </MuiBox>
  );
}
