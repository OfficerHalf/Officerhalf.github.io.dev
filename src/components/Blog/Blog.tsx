import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";

import { routes } from "../../constants/routes";
import { BlogPost } from "../BlogPost";
import { PostGrid } from "./PostGrid";

export const Blog: React.FC = props => {
  return (
    <>
      <Helmet>
        <title>Nathan Smith - Blog</title>
        <meta
          name="description"
          content="Nathan's blog is where he occasionally puts words about life, software, and Dungeons and Dragons."
        />
      </Helmet>
      <Switch>
        <Route exact path={routes.blog.base} component={PostGrid} />
        <Route path={routes.blog.category.template} component={PostGrid} />
        <Route path={routes.blog.tag.template} component={PostGrid} />
        <Route path={routes.blog.post.template} component={BlogPost} />
      </Switch>
    </>
  );
};
