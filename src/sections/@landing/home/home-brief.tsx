import type { SxProps } from '@mui/material';

import { Stack, useTheme, Container } from '@mui/material';

import { shadows } from 'src/theme/core';

import { Image } from 'src/components/image';
import { MuiBox } from 'src/components/@mui/mui-box';

export default function HomeBrief() {
  const theme = useTheme();
  return (
    <Container
      maxWidth={false}
      sx={{
        my: { xs: 6, sm: 12 },
        [theme.breakpoints.only('xs')]: {
          px: 0,
        },
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        spacing={0.2}
        sx={{
          height: { xs: 1, sm: 600 },
          position: 'relative',
        }}
      >
        <MuiBox
          sx={{
            flexGrow: 1,
            width: { xs: 1, sm: '50%' },
            height: 1,

            maxHeight: { xs: 300, sm: 'unset' },
          }}
        >
          <ImageBox
            src="https://plus.unsplash.com/premium_photo-1683121163652-b6b939d660ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9vciUyMHdvb2QlMjBtb2Rlcm58ZW58MHx8MHx8fDA%3D"
            title="Cửa"
            sx={{
              height: 1,
              img: {
                aspectRatio: 'unset',
              },
            }}
          />
        </MuiBox>

        <MuiBox sx={{ flexShrink: 0, width: { xs: 1, sm: '50%' }, height: 1 }}>
          <MuiBox sx={{ pb: 0.1, maxHeight: 300, height: 1 }}>
            <ImageBox
              src="https://images.unsplash.com/photo-1504624720567-64a41aa25d70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29vZGVuJTIwY2hhaXIlMjBtb2Rlcm58ZW58MHwwfDB8fHww"
              title="Bàn"
              sx={{
                img: {
                  aspectRatio: 'unset',
                },
              }}
            />
          </MuiBox>
          <MuiBox sx={{ pt: 0.1, maxHeight: 300, height: 1 }}>
            <ImageBox
              src="https://images.unsplash.com/photo-1617387247724-03782b322835?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvb2RlbiUyMGNoYWlyJTIwbW9kZXJufGVufDB8fDB8fHww"
              title="Ghế"
              sx={{
                img: {
                  aspectRatio: 'unset',
                },
              }}
            />
          </MuiBox>
        </MuiBox>

        <MuiBox
          sx={{
            position: { xs: 'unset', sm: 'absolute' },
            top: '50%',
            left: '50%',
            transform: { xs: 'none', sm: 'translate(-50%,-50%)' },

            width: { xs: 1, sm: 200 },
            zIndex: 2,
            aspectRatio: { xs: 'unset', sm: '1/1' },
            borderRadius: { xs: 0, sm: 9999 },
            backgroundColor: theme.palette.primary.darker,
            p: { xs: 2, sm: 1 },
            textTransform: 'uppercase',
            textAlign: 'center',

            alignContent: 'center',
            boxShadow: shadows('light'),
            typography: { xs: 'subtitle2', sm: 'overline' },
          }}
        >
          <MuiBox
            sx={{
              typography: { xs: 'h6' },
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 1,
            }}
          >
            Tinh Mộc
          </MuiBox>
          Không gian hiện đại
          <MuiBox
            component="br"
            sx={{
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          />{' '}
          mang đến niềm vui, hạnh phúc và sự an lành
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
        minHeight: 1,

        '&::before': {
          content: `"${title}"`,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          backgroundColor: 'rgba(255, 248, 232, 0.3)',
          color: '#333',
          typography: 'h4',
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
          height: 1,
          ...sx,
        }}
        width={1}
      />
    </MuiBox>
  );
}
