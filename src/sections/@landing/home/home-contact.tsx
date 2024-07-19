import { Box, Stack, Container, Typography } from '@mui/material';

export default function HomeContact() {
  return (
    <Container sx={{ backgroundColor: 'transparent', py: 5, px: '20px' }}>
      <Stack alignItems="center" sx={{ backgroundColor: 'transparent' }}>
        <Box textAlign="center">
          <Typography
            sx={{ color: 'rgb(215, 173, 93)', pb: '5px', letterSpacing: 2 }}
            variant="caption"
          >
            CÔNG TY CP KIẾN TRÚC NỘI THẤT TINH MỘC
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgb(134, 134, 134)' }}>
            Xưởng sản xuất: 123 Trương Vĩnh Nguyên
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgb(134, 134, 134)' }}>
            P. Thường Thạnh ,Q. Cái Răng , Tp. Cần Thơ
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgb(134, 134, 134)' }}>
            Điện thoại: (+84) 0292 654 6543
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgb(134, 134, 134)' }}>
            Email: tinhmoc@tinhmoc.com
          </Typography>
        </Box>
        <Box sx={{ mt: '10px' }}>icon</Box>
      </Stack>
    </Container>
  );
}
