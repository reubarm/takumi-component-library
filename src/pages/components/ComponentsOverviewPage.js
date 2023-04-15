import PropTypes from 'prop-types';
import orderBy from 'lodash/orderBy';
import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography, Stack, Link, Box, Divider } from '@mui/material';
// sections
import { ComponentHero, ComponentCard } from '../../sections/_examples';
import { takumi, foundation, mui, extra } from '../../sections/_examples/config-navigation';

// ----------------------------------------------------------------------

export default function ComponentsOverviewPage() {
  return (
    <>
      <Helmet>
        <title> Components Overview | Takumi Component UI Library (Test)</title>
      </Helmet>

      <Container sx={{ pb: 10 }}>
      <Typography variant="h3" sx={{mb: 10}}>Takumi & Material-UI Component Library</Typography>
      <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography variant="h5">Takumi Components</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Takumi components played with in my first week 😅
            </Typography>
          </Stack>

          <Grid>
            {takumi.map((item) => (
              <ComponentCard key={item.name} item={item} />
            ))}
          </Grid>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed', my: 8 }} />
        
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography variant="h5">Theme Foundation</Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Colors, Typography, Shadows…
            </Typography>
          </Stack>

          <Grid>
            {foundation.map((item) => (
              <ComponentCard key={item.name} item={item} />
            ))}
          </Grid>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed', my: 8 }} />

        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography variant="h5">MUI Components</Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Stock component Material UI library with some Takumi theme styling.
            </Typography>
          </Stack>

          <Grid>
            {orderBy(mui, ['name'], ['asc']).map((item) => (
              <ComponentCard key={item.name} item={item} />
            ))}
          </Grid>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed', my: 8 }} />

        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography variant="h5">Extra Components</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Takumi component library as an extension of Material UI
            </Typography>
          </Stack>

          <Grid>
            {extra.map((item) => (
              <ComponentCard key={item.name} item={item} />
            ))}
          </Grid>
        </Stack>
      </Container>
    </>
  );
}

// ----------------------------------------------------------------------

Grid.propTypes = {
  children: PropTypes.node,
};

function Grid({ children }) {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(2, 1fr)',
        sm: 'repeat(3, 1fr)',
        md: 'repeat(4, 1fr)',
        lg: 'repeat(6, 1fr)',
      }}
      gap={2.5}
    >
      {children}
    </Box>
  );
}
