import { Helmet } from 'react-helmet-async';
// @mui
import { Box, Container, Grid, Typography, Stack, Paper, Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShowChartIcon from '@mui/icons-material/ShowChart';
// import followers component from takumi
import { black40 } from '../../../utils/brand.integration';
import FollowerData from '../../../components/followers';
// routes
import { PATH_PAGE } from '../../../routes/paths';
import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';

// ----------------------------------------------------------------------

const insta = {
  followers: 500000,
};

const tiktok = {
  followers: 1700000,
};

const engrate = '7.5%';

const TikTokIcon = () => (
  <svg
    fill={black40}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="100%"
    height="100%"
  >
    <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
  </svg>
);

export default function Followers() {
  return (
    <>
      <Helmet>
        <title> Takumi: Followers | Component UI Library (Test)</title>
      </Helmet>

      <Box
        sx={{
          pt: 6,
          pb: 1,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
        }}
      >
        <Container>
          <CustomBreadcrumbs
            heading="Followers Data Widget"
            links={[
              {
                name: 'Takumi Widgets',
                href: PATH_PAGE.components,
              },
              { name: 'Followers' },
            ]}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Box sx={{ height: 40 }} />

        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" paragraph>
              Follower Data
            </Typography>
          </Grid>

          <Grid item xs={12} md={9}>
            <Stack spacing={3}>
              <Paper variant="outlined" sx={{ p: 3, borderRadius: 1 }}>
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                >
                  <FollowerData
                    account={insta}
                    tooltip="Instagram Followers"
                    icon={InstagramIcon}
                  />
                  <FollowerData account={tiktok} tooltip="TikTok Followers" icon={TikTokIcon} />
                  <FollowerData
                    tooltip="Engagement Rate"
                    icon={ShowChartIcon}
                    engagement={engrate}
                  />
                </Stack>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" paragraph>
              Instagram Followers
            </Typography>
          </Grid>

          <Grid item xs={12} md={9}>
            <Stack spacing={3}>
              <Paper variant="outlined" sx={{ p: 3, borderRadius: 1 }}>
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                >
                  <FollowerData
                    account={insta}
                    tooltip="Instagram Followers"
                    icon={InstagramIcon}
                  />
                </Stack>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" paragraph>
              TikTok Followers
            </Typography>
          </Grid>

          <Grid item xs={12} md={9}>
            <Stack spacing={3}>
              <Paper variant="outlined" sx={{ p: 3, borderRadius: 1 }}>
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                >
                  <FollowerData account={tiktok} tooltip="TikTok Followers" icon={TikTokIcon} />
                </Stack>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" paragraph>
              Engagement Rate
            </Typography>
          </Grid>

          <Grid item xs={12} md={9}>
            <Stack spacing={3}>
              <Paper variant="outlined" sx={{ p: 3, borderRadius: 1 }}>
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                >
                  <FollowerData
                    tooltip="Engagement Rate"
                    icon={ShowChartIcon}
                    engagement={engrate}
                  />
                </Stack>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
