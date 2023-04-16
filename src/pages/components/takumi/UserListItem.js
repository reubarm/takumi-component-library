import { Helmet } from 'react-helmet-async';
import { Box, Container, Stack, Avatar, Typography } from '@mui/material';
import { Block } from '../../../sections/_examples/Block';
import Iconify from '../../../components/iconify';
import { PATH_PAGE } from '../../../routes/paths';
import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';

// ----------------------------------------------------------------------

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { m: '8px !important' },
};

const photo = '/img/john.jpeg';
const fullname = 'John Appleseed';
const engagement = '3.9%';
const instagram = '@johnny';
const tiktok = '@appleseed123';
const email = '12b3314e-c734-4a34-9696-a4be9ed3c9b5@development.takumi.com';

export default function UserListItem() {
  return (
    <>
      <Helmet>
        <title> Takumi: User List Item | Component UI Library (Test)</title>
      </Helmet>

      <Box
        sx={{
          pt: 6,
          pb: 1,
        }}
      >
        <Container>
          <CustomBreadcrumbs
            heading="User List Item"
            links={[
              {
                name: 'Takumi Widgets',
                href: PATH_PAGE.components,
              },
              { name: 'User List Item' },
            ]}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Stack spacing={3}>
          <Block title="Influencer List Item" sx={style}>
            <Avatar alt="Avatar" src={photo} sx={{ width: 72, height: 72 }} />
            <Stack>
              <Typography
                variant="body1"
                sx={{
                  mb: 0.5,
                  fontSize: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 700,
                }}
              >
                {fullname}
                <Avatar
                  alt="Remy Sharp"
                  src="/assets/icons/flags/ic_flag_us.svg"
                  sx={{ width: 18, height: 18, ml: 1 }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '13px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    ml: 2,
                  }}
                >
                  {engagement}
                  <Iconify
                    icon="material-symbols:show-chart"
                    width={18}
                    sx={{ ml: 0.5, flexShrink: 0 }}
                  />
                </Typography>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mb: 0.5,
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 700,
                }}
              >
                <Iconify icon="mdi:instagram" width={18} sx={{ mr: 0.5, flexShrink: 0 }} />
                {instagram}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mb: 0.5,
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 700,
                }}
                gutterBottom
              >
                <Iconify icon="ion:logo-tiktok" width={18} sx={{ mr: 0.5, flexShrink: 0 }} />
                {tiktok}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: '11px', display: 'flex', alignItems: 'center', fontWeight: 400 }}
                gutterBottom
              >
                {email}
              </Typography>
            </Stack>
          </Block>
        </Stack>
      </Container>
    </>
  );
}
