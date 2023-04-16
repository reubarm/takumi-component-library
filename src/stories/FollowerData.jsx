/* eslint-disable */
import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import Tooltip from '@mui/material/Tooltip';
import { Icon } from '@iconify/react';
import clsx from 'clsx';

const black40 = '#A7A9AC';

const numberWithCommas = (num) => {
  if (num === null || num === undefined) {
    return '';
  } else if (typeof num === 'number') {
    return num.toLocaleString();
  } else {
    return parseFloat(num).toLocaleString();
  }
};

export const FollowerData = ({
  account,
  engagement,
  tooltip = 'User Info',
  icon = 'material-symbols:verified-user',
  color = black40,
  className,
}) => {
  const classes = useStyles();
  if (!account && !engagement) return null;
  const { followers } = account || {};
  return (
    <div className={clsx(classes.root, className)}>
      <Tooltip title={tooltip} placement="top">
        <>
          <Icon icon={icon} color={color} />
          {followers && numberWithCommas(followers)}
          {engagement && engagement}
        </>
      </Tooltip>
    </div>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      color: black40,
      fontWeight: '700',
      fontFamily: 'sans-serif',
      fontSize: '14px',
      marginRight: '5px',
      '& span': {
        display: 'flex',
        alignItems: 'center',
      },
      '& svg': {
        height: '20px',
        width: '20px',
        color: black40,
        marginRight: '3px',
      },
      '&:not(:first-child)': {
        borderLeft: `1px solid ${black40}`,
        paddingLeft: '5px',
        maxHeight: '15px',
      },
    },
  })
);
