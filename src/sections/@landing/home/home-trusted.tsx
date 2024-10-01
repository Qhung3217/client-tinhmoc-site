import { useTheme, Container, Typography } from '@mui/material';

import { Image } from 'src/components/image';
import { Grid } from 'src/components/Grid/mui';
import { MuiBox } from 'src/components/@mui/mui-box';

export default function HomeTrusted() {
  const theme = useTheme();
  return (
    <MuiBox
      sx={{
        mt: 15,
      }}
    >
      <MuiBox
        sx={{
          width: 1,
          height: 3,
          backgroundImage:
            'radial-gradient(circle, #5a8d97, #4a7c86, #3a6b75, #2a5a65, #1a4a55, #12434d, #083b46, #00343e, #00333d, #00323b, #00313a, #003039)',
        }}
      />
      <Container
        maxWidth={false}
        sx={{
          backgroundColor: '#171A21',
          //   borderBottom: `2px solid ${theme.palette.primary.darker}`,
          py: 8,
        }}
      >
        <Grid container spacing={2}>
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
                Tinh Mộc là một thương hiệu với hơn 10 năm kinh nghiệm trong lĩnh vực sản xuất và
                chế tác các sản phẩm từ gỗ tự nhiên. Sản phẩm của Tinh Mộc được làm từ gỗ chất lượng
                cao, sử dụng công nghệ hiện đại và quy trình khép kín. Đội ngũ chuyên viên kỹ thuật
                lành nghề đã góp phần tạo ra những sản phẩm không chỉ bền vững mà còn mang tính thẩm
                mỹ cao. Tinh Mộc cam kết đem đến cho khách hàng các sản phẩm vừa tinh tế vừa đáp ứng
                tiêu chuẩn chất lượng vượt trội.
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
      <MuiBox
        sx={{
          width: 1,
          height: 3,
          backgroundImage:
            'radial-gradient(circle, #5a8d97, #4a7c86, #3a6b75, #2a5a65, #1a4a55, #12434d, #083b46, #00343e, #00333d, #00323b, #00313a, #003039)',
        }}
      />
    </MuiBox>
  );
}
