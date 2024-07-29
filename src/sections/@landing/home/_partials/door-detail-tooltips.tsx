import type { TooltipProps } from '@mui/material';

import { Box, Tooltip } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

export default function DoorDetailTooltips() {
  const style = {
    width: 16,
    height: 16,
    borderRadius: 99999,
  };
  const mdUp = useResponsive('up', 990);
  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: 1,
          height: 1,
        }}
      >
        {/* -------------------- LEFT ------------------- */}

        <CTooltip title="Nẹp L. Đứng" offset={[0, -20]}>
          <Box sx={{ position: 'absolute', top: '30%', left: '23.2%', ...style }} />
        </CTooltip>
        <CTooltip
          title="Nẹp L. Đứng"
          offset={[0, -20]}
          sx={{
            width: 227,
          }}
        >
          <Box sx={{ position: 'absolute', top: '35%', left: '29.8%', ...style }} />
        </CTooltip>
        <CTooltip
          title="Nẹp T. đứng"
          offset={[0, -15]}
          sx={{
            width: 295,
          }}
        >
          <Box sx={{ position: 'absolute', top: '40.5%', left: '35.5%', ...style }} />
        </CTooltip>
        <CTooltip
          title="Mặt khoá"
          offset={[0, mdUp ? 10 : -20]}
          sx={{
            width: mdUp ? 320 : 290,
          }}
        >
          <Box sx={{ position: 'absolute', top: '55.5%', left: '37.5%', ...style }} />
        </CTooltip>
        <CTooltip
          title="Ngạch cửa. Nẹp"
          offset={[0, mdUp ? 95 : 40]}
          sx={{
            width: mdUp ? 400 : 350,
          }}
        >
          <Box sx={{ position: 'absolute', bottom: '9%', left: '44.5%', ...style }} />
        </CTooltip>
        <CTooltip
          title="Thanh ngạch cửa"
          offset={[0, mdUp ? 100 : 65]}
          sx={{
            width: mdUp ? 413 : 380,
          }}
        >
          <Box sx={{ position: 'absolute', bottom: '4%', left: '45%', ...style }} />
        </CTooltip>
        {/* -------------------- RIGHT ------------------- */}

        <CTooltip
          title="Khung bao. Thanh bản lề"
          position="right"
          offset={[0, -25]}
          sx={{
            width: mdUp ? 460 : 390,
          }}
        >
          <Box sx={{ position: 'absolute', bottom: '43%', right: '49.3%', ...style }} />
        </CTooltip>
        <CTooltip
          title="Nẹp L. Đứng"
          position="right"
          offset={[0, -25]}
          sx={{
            width: mdUp ? 410 : 350,
          }}
        >
          <Box sx={{ position: 'absolute', bottom: '37%', right: '45.3%', ...style }} />
        </CTooltip>
        <CTooltip
          title="Bản lề"
          position="right"
          offset={[0, -25]}
          sx={{
            width: mdUp ? 375 : 330,
          }}
        >
          <Box sx={{ position: 'absolute', bottom: '48.5%', right: '41.8%', ...style }} />
        </CTooltip>
        <CTooltip
          title="Cánh cửa"
          position="right"
          offset={[0, -25]}
          sx={{
            width: mdUp ? 290 : 260,
          }}
        >
          <Box sx={{ position: 'absolute', bottom: '54%', right: '35%', ...style }} />
        </CTooltip>
        <CTooltip
          title="Tay nắm khoá"
          position="right"
          offset={[0, -25]}
          sx={{
            width: 205,
          }}
        >
          <Box sx={{ position: 'absolute', bottom: '37%', right: '28.2%', ...style }} />
        </CTooltip>
        <CTooltip
          title="Khoá cửa"
          position="right"
          offset={[0, -25]}
          sx={{
            width: 110,
          }}
        >
          <Box sx={{ position: 'absolute', bottom: '40.3%', right: '20.2%', ...style }} />
        </CTooltip>

        {/* -------------------- TOP ------------------- */}
        <CTooltip
          title="Nẹp L. ngang"
          position="right"
          offset={[0, -25]}
          sx={{
            width: mdUp ? 486 : 400,
          }}
        >
          <Box sx={{ position: 'absolute', top: '4.3%', right: '50.7%', ...style }} />
        </CTooltip>
        <CTooltip
          title="Khung bao. Thanh ngang"
          offset={[0, mdUp ? 90 : 40]}
          sx={{
            width: mdUp ? 400 : 350,
          }}
        >
          <Box sx={{ position: 'absolute', top: '6%', right: '54.1%', ...style }} />
        </CTooltip>
        <CTooltip
          title="Nẹp T ngang"
          offset={[0, mdUp ? 90 : 40]}
          sx={{
            width: mdUp ? 400 : 350,
          }}
        >
          <Box sx={{ position: 'absolute', top: '13%', right: '54.1%', ...style }} />
        </CTooltip>
      </Box>
    </Box>
  );
}

type CTooltipProps = TooltipProps & {
  offset?: number[];
  position?: 'left' | 'right';
};
function CTooltip({ title, children, sx, offset, position = 'left', ...other }: CTooltipProps) {
  return (
    <Tooltip
      placement={position === 'left' ? 'left-end' : 'right-end'}
      sx={{}}
      title={
        <Box
          sx={{
            width: 155,

            color: 'white',
            borderBottom: '1px solid #c3c3c380',
            fontSize: 14,
            fontWeight: 200,
            lineHeight: 1.4,
            px: '9px',
            pb: '5px',

            backgroundColor: 'transparent !important',

            position: 'relative',
            ...(position === 'left'
              ? {
                  textAlign: 'left',
                }
              : {
                  textAlign: 'right',
                }),

            '&:before': {
              content: '""',
              bottom: -5,
              ...(position === 'left'
                ? {
                    left: 0,
                  }
                : {
                    right: 0,
                  }),
              width: 10,
              height: 10,
              borderRadius: 99999,
              backgroundColor: 'white',
              position: 'absolute',
            },
            ...sx,
          }}
        >
          {title}
        </Box>
      }
      slotProps={{
        popper: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: offset || [0, -20],
              },
            },
          ],
        },
        tooltip: {
          sx: {
            backgroundColor: 'transparent !important',
          },
        },
      }}
      {...other}
    >
      {children}
    </Tooltip>
  );
}
