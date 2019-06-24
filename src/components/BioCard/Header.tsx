import * as React from "react";
import {
  makeStyles,
  createStyles,
  CardMedia,
  CardHeader,
  Avatar,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Menu,
  IconButton
} from "@material-ui/core";
import { GithubCircle, LinkedinBox } from "mdi-material-ui";
import { MoreVert, Email } from "@material-ui/icons";

const useStyles = makeStyles(theme =>
  createStyles({
    media: {
      width: 275,
      height: 275,
      backgroundPosition: "top"
    }
  })
);

export const Header: React.FC = props => {
  const classes = useStyles();
  return (
    <CardMedia
      image="https://cdn.buttercms.com/Tg7ZPzeRaOVxhFyTVImj"
      classes={{ root: classes.media }}
    />
  );
};

export const CondensedHeader: React.FC = props => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <CardHeader
        avatar={
          <Avatar src="https://cdn.buttercms.com/Tg7ZPzeRaOVxhFyTVImj">
            NS
          </Avatar>
        }
        title="Nathan Smith"
        action={
          <IconButton onClick={handleClick}>
            <MoreVert />
          </IconButton>
        }
      />
      <Menu
        id="about-menu"
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <ListItemIcon>
            <GithubCircle />
          </ListItemIcon>
          <ListItemText>Github</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LinkedinBox />
          </ListItemIcon>
          <ListItemText>LinkedIn</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Email />
          </ListItemIcon>
          <ListItemText>Email</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};
