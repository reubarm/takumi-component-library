import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { Box, Container, Stack, Avatar, Typography } from '@mui/material';
import { Block } from '../../../sections/_examples/Block';
import Iconify from '../../../components/iconify';
// routes
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

export default function UserListItem() {
  const [click, setCLick] = useState(null);

  const handleClick = (event) => {
    setCLick(event.currentTarget);
  };

  const handleClose = () => {
    setCLick(null);
  };

  return (
    <>
      <Helmet>
        <title> Takumi: User List Item | Component UI Library (Test)</title>
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
            <Avatar alt="Remy Sharp" src="/img/john.jpeg" sx={{ width: 72, height: 72 }} />
            <Stack>
              <Typography
                variant="body1"
                sx={{ fontSize: '18px', display: 'flex', alignItems: 'center', fontWeight: 700 }}
                gutterBottom
              >
                John Appleseed
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
                  3.7%
                  <Iconify
                    icon="material-symbols:show-chart"
                    width={18}
                    sx={{ ml: 0.5, flexShrink: 0 }}
                  />
                </Typography>
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: '14px', display: 'flex', alignItems: 'center', fontWeight: 700 }}
                gutterBottom
              >
                <Iconify icon="mdi:instagram" width={24} sx={{ mr: 0.5, flexShrink: 0 }} />
                @johnny
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: '14px', display: 'flex', alignItems: 'center', fontWeight: 700 }}
                gutterBottom
              >
                <Iconify icon="ion:logo-tiktok" width={24} sx={{ mr: 0.5, flexShrink: 0 }} />
                @appleseed123
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: '11px', display: 'flex', alignItems: 'center', fontWeight: 400 }}
                gutterBottom
              >
                12b3314e-c734-4a34-9696-a4be9ed3c9b5@development.takumi.com
              </Typography>
            </Stack>
            {/* <Avatar alt="Remy Sharp" src="/img/messi.png" sx={{ width: 96, height: 96 }} /> */}
          </Block>
        </Stack>
      </Container>
    </>
  );
}
