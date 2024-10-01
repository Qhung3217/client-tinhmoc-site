import type { BoxProps, TypographyProps } from '@mui/material';

import { Stack, Container, Typography } from '@mui/material';

import { shadows } from 'src/theme/core';

import { Image } from 'src/components/image';
import { Grid } from 'src/components/Grid/mui';
import { MuiBox } from 'src/components/@mui/mui-box';

export default function HomeIntroduce() {
  return (
    <Container
      maxWidth={false}
      sx={{
        mt: 3,
        mb: 10,
        backgroundImage: 'url(/assets/landing/about/bg-intro-2.jpg)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Grid container spacing={1}>
        {/* ------------------- ROW 1 ------------------  */}

        <Grid xs={12} md={5} lg={6}>
          <MuiBox>
            <Image
              src="/assets/landing/about/company-6.jpg"
              alt="About Tinh Moc"
              sx={{
                boxShadow: shadows('light'),
              }}
            />
          </MuiBox>
        </Grid>
        <Grid xs={12} md={3} lg={2}>
          <Stack justifyContent="space-between" height="80%">
            <TextBox
              title="Kinh nghiệm dày dặn"
              subTitle="Hơn 10 năm kinh nghiệm chế tác được đúc kết trong từng sản phẩm"
            />
            <TextBox
              title="Sự tận tâm và am hiểu"
              subTitle="Tinh Mộc cùng bạn lựa chọn các vật liệu gỗ phù hợp với sự tận tâm và am hiểu"
              spaceLeft
              maxWidth={{
                md: 170,
              }}
              sx={{
                textAlign: {
                  sm: 'right',
                },
                ml: {
                  sm: 'auto',
                },
                display: {
                  xs: 'none',
                  sm: 'block',
                },
              }}
            />
          </Stack>
        </Grid>
        <Grid xs={12} md={4}>
          <MuiBox
            sx={{
              display: 'flex',
              flexDirection: 'column',
              mt: {
                xs: 2,
                sm: 0,
              },
            }}
          >
            <MuiBox
              maxWidth={{
                xs: 1,
                sm: 'unset',
              }}
            >
              <Image
                src="/assets/landing/about/company-1.jpg"
                alt="About Tinh Moc"
                sx={{ boxShadow: shadows('light') }}
              />
            </MuiBox>
            <TextBox
              title="Sự tận tâm và am hiểu"
              subTitle="Tinh Mộc cùng bạn lựa chọn các vật liệu gỗ phù hợp với sự tận tâm và am hiểu"
              maxWidth={1}
              sx={{
                display: {
                  xs: 'block',
                  sm: 'none',
                },
              }}
            />
          </MuiBox>
        </Grid>

        {/* ------------------- ROW 2 ------------------ */}
        <Grid xs={12} md={6} sx={{ mt: { xs: 2, sm: 4 } }}>
          <MuiBox
            sx={{
              ml: { md: 4, lg: 10 },
              display: 'flex',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
            }}
          >
            <MuiBox
              sx={{
                maxWidth: { md: 300, lg: 420 },
              }}
            >
              <Image
                src="/assets/landing/about/company-4.jpg"
                alt="About Tinh Moc"
                sx={{ boxShadow: shadows('light') }}
                ratio="4/3"
              />
            </MuiBox>
            <TextBox
              maxWidth={{ xs: 1, sm: 140, md: 100, lg: 120 }}
              sx={{ pl: { xs: 0, sm: 2 } }}
              title="Sự kết hợp hoàn hảo"
              subTitle="Sự kết hợp hoàn hảo giữa nguồn vật liệu gỗ tự nhiên
              cao cấp và ứng dụng công nghệ cao"
            />
          </MuiBox>
        </Grid>

        <Grid xs={12} md={6}>
          <MuiBox
            sx={{
              mr: { md: 6, lg: 10 },
              mt: { xs: 2, sm: 1, md: -1, lg: -4 },
              display: 'flex',
              alignItems: { xs: 'flex-start', md: 'flex-end' },
              flexDirection: 'column',
            }}
          >
            <MuiBox
              sx={{
                maxWidth: { md: 450, lg: 540 },
              }}
            >
              <Image
                src="/assets/landing/about/company-5.jpg"
                alt="About Tinh Moc"
                sx={{
                  boxShadow: shadows('light'),
                }}
              />
            </MuiBox>
            <TextBox
              maxWidth={{ md: 450, lg: 540 }}
              title="Đội ngũ chuyên nghiệp"
              subTitle="Đội ngũ chuyên viên kỹ thuật giàu kinh nghiệm đã góp phần mang lại những sản phẩm
              tinh tế, bền vững và mang đậm dấu ấn thủ công"
            />
          </MuiBox>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 8 }}>
        <Grid xs={12} md={6}>
          <MuiBox
            sx={{
              mx: { xs: 2, sm: 8, md: 5, lg: 10 },

              // mt: 4,
              alignContent: 'center',
              height: 1,
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                mb: 2,
                color: 'primary.main',
                typography: {
                  xs: 'h3',
                  lg: 'h3',
                },
              }}
            >
              Chất lượng tạo nên sự uy tín
            </Typography>
            <Typography
              sx={{
                textAlign: 'center',
                typography: {
                  xs: 'body2',
                  lg: 'body1',
                },
                color: 'white',
                maxWidth: 500,
                mx: 'auto',
              }}
            >
              Tinh Mộc là một thương hiệu với hơn 10 năm kinh nghiệm trong lĩnh vực sản xuất và chế
              tác các sản phẩm từ gỗ tự nhiên. Sản phẩm của Tinh Mộc được làm từ gỗ chất lượng cao,
              sử dụng công nghệ hiện đại và quy trình khép kín. Đội ngũ chuyên viên kỹ thuật lành
              nghề đã góp phần tạo ra những sản phẩm không chỉ bền vững mà còn mang tính thẩm mỹ
              cao. Tinh Mộc cam kết đem đến cho khách hàng các sản phẩm vừa tinh tế vừa đáp ứng tiêu
              chuẩn chất lượng vượt trội.
            </Typography>
          </MuiBox>
        </Grid>
        <Grid xs={12} md={6}>
          <MuiBox sx={{ alignContent: 'center', height: 1 }}>
            <Image src="/assets/landing/about.jpg" alt="About Tinh Moc" />
          </MuiBox>
        </Grid>
      </Grid>
    </Container>
  );
}

type TextBoxProps = Omit<BoxProps, 'children'> & {
  title: string;
  subTitle: string;
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
          typography: {
            xs: 'h5',
            sm: 'h3',
            md: 'h5',
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
            xs: 'body2',
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
