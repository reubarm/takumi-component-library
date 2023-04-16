/* eslint-disable */
import { Stack, Avatar, Typography } from '@mui/material';
import { Icon } from '@iconify/react';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { margin: '8px !important' },
};

export const UserListItem = ({ photo, fullname, engagement, instagram, tiktok, email, region }) => {
  return (
    <div style={style}>
      <Avatar alt="Avatar" src={photo && photo} sx={{ width: 72, height: 72, mr: 2 }} />
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
          {fullname && fullname}
          <Avatar
            alt="Remy Sharp"
            src={region}
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
            {engagement && engagement}
            <Icon
              icon="material-symbols:show-chart"
              width={18}
              style={{ marginLeft: 0.5, flexShrink: 0 }}
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
          <Icon icon="mdi:instagram" width={18} style={{ marginRight: '5px', flexShrink: 0 }} />
          {instagram && instagram}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mb: 1,
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            fontWeight: 700,
          }}
          gutterBottom
        >
          <Icon icon="ion:logo-tiktok" width={18} style={{ marginRight: '5px', flexShrink: 0 }} />
          {tiktok && tiktok}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: '11px', display: 'flex', alignItems: 'center', fontWeight: 400 }}
        >
          {email && email}
        </Typography>
      </Stack>
    </div>
  );
};
