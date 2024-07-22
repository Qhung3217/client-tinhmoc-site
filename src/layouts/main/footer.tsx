import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { _socials } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { Logo } from 'src/components/logo';
import { SocialIcon } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';
import { CustomModal } from 'src/components/custom-modal';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Minimal',
    children: [
      { name: 'About us', href: paths.about },
      { name: 'Contact us', href: paths.contact },
      { name: 'FAQs', href: paths.faqs },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and condition', href: '#' },
      { name: 'Privacy policy', href: '#' },
    ],
  },
  { headline: 'Contact', children: [{ name: 'support@minimals.cc', href: '#' }] },
];

// ----------------------------------------------------------------------

export type FooterProps = {
  layoutQuery: Breakpoint;
  sx?: SxProps<Theme>;
};

export function Footer({ layoutQuery, sx }: FooterProps) {
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ position: 'relative', bgcolor: 'background.default', ...sx }}>
      <Divider />

      <Container
        sx={{
          pb: 5,
          pt: 10,
          textAlign: 'center',
          [theme.breakpoints.up(layoutQuery)]: { textAlign: 'unset' },
        }}
      >
        <Logo />

        <Grid
          container
          sx={{
            mt: 3,
            justifyContent: 'center',
            [theme.breakpoints.up(layoutQuery)]: { justifyContent: 'space-between' },
          }}
        >
          <Grid {...{ xs: 12, [layoutQuery]: 3 }}>
            <Typography
              variant="body2"
              sx={{
                mx: 'auto',
                maxWidth: 280,
                [theme.breakpoints.up(layoutQuery)]: { mx: 'unset' },
              }}
            >
              The starting point for your next project with Minimal UI Kit, built on the newest
              version of Material-UI ©, ready to be customized to your style.
            </Typography>

            <Stack
              direction="row"
              sx={{
                mt: 3,
                mb: 5,
                justifyContent: 'center',
                [theme.breakpoints.up(layoutQuery)]: { mb: 0, justifyContent: 'flex-start' },
              }}
            >
              {_socials.map((social) => (
                <IconButton key={social.name}>
                  <SocialIcon icon={social.name} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid {...{ xs: 12, [layoutQuery]: 6 }}>
            <Stack
              spacing={5}
              sx={{
                flexDirection: 'column',
                [theme.breakpoints.up(layoutQuery)]: { flexDirection: 'row' },
              }}
            >
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  sx={{
                    width: 1,
                    alignItems: 'center',
                    [theme.breakpoints.up(layoutQuery)]: { alignItems: 'flex-start' },
                  }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 10 }}>
          © All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

export type HomeFooterProps = {
  sx?: SxProps<Theme>;
};

export function HomeFooter({ sx }: HomeFooterProps) {
  const isOpen = useBoolean();
  return (
    <Box
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
          <Box textAlign="center" display="flex" alignItems="center" flexDirection="column">
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
          <Box sx={{ mt: '10px' }}>
            <Stack direction="row" alignItems="center">
              <Box sx={{ cursor: 'pointer' }} onClick={isOpen.onTrue}>
                <SvgColor
                  src={`${CONFIG.site.basePath}/assets/landing/icons/maps.svg`}
                  sx={{ width: 50, height: 50, backgroundColor: 'rgb(134, 134, 134)' }}
                />
              </Box>
              <Box sx={{ ml: '10px', pt: '5px' }}>
                <Counter />
              </Box>
            </Stack>
          </Box>
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
    </Box>
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
