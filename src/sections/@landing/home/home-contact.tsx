import { Container, Typography } from '@mui/material';

import { Image } from 'src/components/image';
import { Grid } from 'src/components/Grid/mui';
import { MuiBox } from 'src/components/@mui/mui-box';

export default function HomeContact() {
  return (
    <Container maxWidth={false}>
      <Container>
        <Grid container>
          <Grid xs={12} md={6}>
            <MuiBox>
              <Typography variant="h5">Cần hỗ trợ?</Typography>
              <Typography variant="caption">
                Liên hệ ngay với chúng tôi để được hỗ trợ tốt nhất!
              </Typography>
            </MuiBox>
          </Grid>
          <Grid xs={12} md={6}>
            <Image
              src="https://images.unsplash.com/photo-1726503453413-5bfb0e1d931d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
              alt="image"
            />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
