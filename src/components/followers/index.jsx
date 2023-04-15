import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@mui/material';
import { createStyles, makeStyles } from '@material-ui/styles';
import { black40, bold, sizeCaption } from '../../utils/brand.integration';
import { numberWithCommas } from '../../utils/utilities';

const FollowerData = ({ account, engagement, tooltip, icon: Icon, color, className }) => {
  const classes = useStyles();
  if (!account && !engagement) return null;
  const { followers } = account || {};
  return (
    <div className={classes.root}>
      <Tooltip title={tooltip} placement="top">
        <Icon color={black40} />
      </Tooltip>
      {followers && numberWithCommas(followers)}
      {engagement && engagement}
    </div>
  );
};

FollowerData.propTypes = {
  account: PropTypes.shape({
    followers: PropTypes.number,
  }),
  engagement: PropTypes.string,
  tooltip: PropTypes.string,
  icon: PropTypes.elementType.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      color: black40,
      fontWeight: bold,
      fontSize: sizeCaption,
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
        paddingLeft: '5px',
        maxHeight: '15px',
      },
    },
  })
);

export default FollowerData;
