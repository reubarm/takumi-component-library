import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { Box, Container, Stack, Button, Popover, IconButton } from '@mui/material';
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

export default function FinanceApprovalButtons() {
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
        <title> Takumi: Finance Approval Buttons | Component UI Library (Test)</title>
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
            heading="Finance Approval Buttons"
            links={[
              {
                name: 'Takumi Widgets',
                href: PATH_PAGE.components,
              },
              { name: 'Finance Approval Buttons' },
            ]}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Stack spacing={3}>
          <Block sx={style}>
            <Button variant="outlined" onClick={handleClick}>
              <IconButton>
                <Iconify icon="eva:more-vertical-fill" />
              </IconButton>
            </Button>

            <Popover
              open={Boolean(click)}
              anchorEl={click}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box sx={{ p: 2, maxWidth: 250 }}>
                <Button variant="contained" color="inherit" sx={{ width: '100%', my: 1 }}>
                  Approve Payment
                </Button>
                <Button variant="contained" color="inherit" sx={{ width: '100%', my: 1 }}>
                  Mark as Paid
                </Button>
              </Box>
            </Popover>
          </Block>
        </Stack>
      </Container>
    </>
  );
}
