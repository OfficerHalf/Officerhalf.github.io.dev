import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Avatar,
  CardMedia,
  IconButton,
  Typography,
  makeStyles,
  createStyles,
  Menu,
  MenuItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import { GithubCircle, LinkedinBox } from "mdi-material-ui";
import { Email, MoreVert } from "@material-ui/icons";

interface BioCardProps {
  condensed?: boolean;
}

const bio =
  "Nathan Smith is an Associate Software Developer at Bentley Systems where he mainly writes full-stack enterprise ASP.NET Core and TypeScript + React web applications. In his spare time he plays tabletop and video games and takes pictures of his cats.";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      maxWidth: 275
    },
    media: {
      width: 275,
      height: 275,
      backgroundPosition: "top"
    },
    actions: {
      justifyContent: "flex-end"
    }
  })
);

const Header: React.FC = props => {
  const classes = useStyles();
  return (
    <CardMedia
      image="https://cdn.buttercms.com/Tg7ZPzeRaOVxhFyTVImj"
      classes={{ root: classes.media }}
    />
  );
};

const CondensedHeader: React.FC = props => {
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

const CondensedBody: React.FC = props => <CardContent>{bio}</CardContent>;
const Body: React.FC = props => (
  <CardContent>
    <Typography variant="h5" gutterBottom>
      Nathan Smith
    </Typography>
    {bio}
  </CardContent>
);

const Footer: React.FC = props => {
  const classes = useStyles();
  return (
    <CardActions className={classes.actions}>
      <IconButton>
        <GithubCircle />
      </IconButton>
      <IconButton>
        <LinkedinBox />
      </IconButton>
      <IconButton>
        <Email />
      </IconButton>
    </CardActions>
  );
};

export const BioCard: React.FC<BioCardProps> = props => {
  const { condensed = false } = props;
  const header = condensed ? <CondensedHeader /> : <Header />;
  const body = condensed ? <CondensedBody /> : <Body />;
  const footer = condensed ? <></> : <Footer />;
  const classes = useStyles();
  return (
    <Card classes={{ root: condensed ? undefined : classes.root }}>
      {header}
      {body}
      {footer}
    </Card>
  );
};
