import type { Theme, SxProps } from '@mui/material/styles';

import { Link } from '@mui/material';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';
import { MuiBox } from 'src/components/@mui/mui-box';
import { CustomModal } from 'src/components/custom-modal';

// ----------------------------------------------------------------------

export type HomeFooterProps = {
  sx?: SxProps<Theme>;
};

export function HomeFooter({ sx }: HomeFooterProps) {
  const isOpen = useBoolean();
  return (
    <MuiBox
      component="footer"
      sx={{
        textAlign: 'center',
        py: 5,
        px: '20px',
        position: 'relative',
        bgcolor: 'black',
        ...sx,
      }}
    >
      <Container>
        <Stack alignItems="center" sx={{ backgroundColor: 'transparent' }}>
          <MuiBox textAlign="center" display="flex" alignItems="center" flexDirection="column">
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
          </MuiBox>
          <MuiBox sx={{ mt: '10px' }}>
            <Stack direction="row" alignItems="center">
              <MuiBox sx={{ cursor: 'pointer' }} onClick={isOpen.onTrue}>
                <SvgColor
                  src={`${CONFIG.site.basePath}/assets/landing/icons/maps.svg`}
                  sx={{ width: 50, height: 50, backgroundColor: 'rgb(134, 134, 134)' }}
                />
              </MuiBox>
              <MuiBox sx={{ ml: '10px', pt: '5px' }}>
                <Counter />
              </MuiBox>
            </Stack>
            <MuiBox sx={{ mt: 2 }}>
              <Link
                component={RouterLink}
                href={paths.dashboard.product.root}
                sx={{
                  color: 'rgb(134, 134, 134)',
                  typography: 'caption',
                  textTransform: 'uppercase',
                }}
              >
                Dành cho quản trị viên
              </Link>
            </MuiBox>
          </MuiBox>
        </Stack>
      </Container>
      <CustomModal open={isOpen.value} onClose={isOpen.onFalse}>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7858.773855248787!2d105.761654!3d9.984862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a089eb8070d1ff%3A0xcca3b64e4b204b6a!2zMTIzIMSQLiBUcsawxqFuZyBWxKluaCBOZ3V5w6puLCBUaMaw4budbmcgVGjhuqFuaCwgQ8OhaSBSxINuZywgQ-G6p24gVGjGoSwgVmlldG5hbQ!5e0!3m2!1sen!2sus!4v1721632605256!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0, width: '100%' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </CustomModal>
    </MuiBox>
  );
}
function Counter() {
  return (
    <a href="https://www.counters-free.net/stats/fx8k" style={{ textDecoration: 'none' }}>
      <svg width="100" height="45" id="besucherzaehler2">
        <g>
          <rect
            width="100"
            height="45"
            x="0"
            y="0"
            style={{ fill: '#ffffff' }}
            fillOpacity="0.0"
            stroke="#565656"
          />
          <text
            x="6"
            y="38"
            style={{ fontFamily: 'Roboto, sans-serif', fontSize: '11px' }}
            fill="#565656"
          >
            Total: 2 634
          </text>
          <rect width="3" height="9" x="6" y="14" style={{ fill: '#565656' }} />
          <rect width="3" height="17" x="11" y="6" style={{ fill: '#565656' }} />
          <rect width="3" height="13" x="16" y="10" style={{ fill: '#565656' }} />
          <text
            x="25"
            y="23"
            style={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif', fontSize: '11px' }}
            fill="#565656"
          >
            Visitors
          </text>
        </g>
      </svg>
    </a>
  );
}
