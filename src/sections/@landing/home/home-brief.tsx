import type { SxProps } from '@mui/material';

import { Stack, useTheme, Container } from '@mui/material';

import { Image } from 'src/components/image';
import { MuiBox } from 'src/components/@mui/mui-box';

export default function HomeBrief() {
  const theme = useTheme();
  return (
    <Container
      maxWidth={false}
      sx={{
        my: 12,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={0.2}
        sx={{
          height: 600,
        }}
      >
        <MuiBox sx={{ flexGrow: 1, width: '50%', height: 1 }}>
          <ImageBox
            src="https://plus.unsplash.com/premium_photo-1683121163652-b6b939d660ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9vciUyMHdvb2QlMjBtb2Rlcm58ZW58MHx8MHx8fDA%3D"
            title="Cửa"
            sx={{ height: 1, aspectRatio: 'unset' }}
          />
        </MuiBox>

        <MuiBox sx={{ flexShrink: 0, width: '40%', height: 1 }}>
          <MuiBox sx={{ height: 300, pb: 0.1 }}>
            <ImageBox
              src="https://images.unsplash.com/photo-1504624720567-64a41aa25d70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29vZGVuJTIwY2hhaXIlMjBtb2Rlcm58ZW58MHwwfDB8fHww"
              title="Bàn"
            />
          </MuiBox>
          <MuiBox sx={{ height: 300, pt: 0.1 }}>
            <ImageBox
              src="https://images.unsplash.com/photo-1617387247724-03782b322835?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvb2RlbiUyMGNoYWlyJTIwbW9kZXJufGVufDB8fDB8fHww"
              title="Ghế"
            />
          </MuiBox>
        </MuiBox>
        <MuiBox
          sx={{
            flexShrink: 0,
            width: '10%',
            height: 600,
            backgroundColor: theme.palette.primary.darker,
            // backgroundImage: 'url(assets/landing/typo_bg_02.png)',
            textOrientation: 'vertical',
            writingMode: 'vertical-rl',
            py: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          Sản phẩm của Tinh Mộc mang lại niềm vui, hạnh phúc và sự an lành
        </MuiBox>
      </Stack>
    </Container>
  );
}

type ImageBoxProps = {
  src: string;
  title: string;
  sx?: SxProps;
  ratio?: string;
};
function ImageBox({ src, title, sx, ratio }: ImageBoxProps) {
  return (
    <MuiBox
      sx={{
        position: 'relative',
        height: 1,
        width: 1,
        overflow: 'hidden',

        '&::before': {
          content: `"${title}"`,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.12)',
          color: 'white',
          typography: 'h6',
          textTransform: 'uppercase',
          width: 1,
          height: 1,
          alignContent: 'center',
          textAlign: 'center',
        },
      }}
    >
      <Image
        ratio={ratio || '2/1'}
        src={src}
        sx={{
          ...sx,
        }}
        width={1}
      />
    </MuiBox>
  );
}
