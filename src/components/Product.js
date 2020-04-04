import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { green, pink, blueGrey } from '@material-ui/core/colors';
import DetailCard from './DetailCard';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  variant: {
    width: 30,
    height: 30,
    border: `2px solid ${theme.palette.background.paper}`,
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  marker: {
    cursor: 'pointer',
    border: `2px solid ${blueGrey[500]}`,
  },
}));

const Product = props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'transitions-popper' : undefined;

  return (
    <>
      <Badge
        onClick={handleClick}
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        badgeContent={
          props.variant === 'search' ? (
            <Avatar className={[classes.pink, classes.variant]}>
              <PageviewIcon />
            </Avatar>
          ) : (
            <Avatar className={[classes.green, classes.variant]}>
              <AssignmentIcon />
            </Avatar>
          )
        }
      >
        <Avatar
          alt="Prod"
          src="https://i5.walmartimages.ca/images/Large/094/514/6000200094514.jpg"
          className={[classes.large, classes.marker]}
        />
      </Badge>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={100}>
            <DetailCard handleOwn={props.handleOwn} />
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default Product;
