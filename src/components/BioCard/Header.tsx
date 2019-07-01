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
import { MoreVert } from "@material-ui/icons";

import { links } from "../../constants/links";
import { bioImage } from "../../constants/strings";

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
  return <CardMedia image={bioImage} classes={{ root: classes.media }} />;
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
        avatar={<Avatar src={bioImage}>NS</Avatar>}
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
        <MenuItem
          component="a"
          href={links.github}
          target="_blank"
          rel="noopener"
        >
          <ListItemIcon>
            <GithubCircle />
          </ListItemIcon>
          <ListItemText>Github</ListItemText>
        </MenuItem>
        <MenuItem
          component="a"
          href={links.linkedin}
          target="_blank"
          rel="noopener"
        >
          <ListItemIcon>
            <LinkedinBox />
          </ListItemIcon>
          <ListItemText>LinkedIn</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};
