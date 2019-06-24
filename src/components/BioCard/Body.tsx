import * as React from "react";
import { CardContent, Typography } from "@material-ui/core";

import { bio } from "../../constants/strings";

export const CondensedBody: React.FC = props => (
  <CardContent>{bio}</CardContent>
);

export const Body: React.FC = props => (
  <CardContent>
    <Typography variant="h5" gutterBottom>
      Nathan Smith
    </Typography>
    {bio}
  </CardContent>
);
