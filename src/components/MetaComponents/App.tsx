import React from 'react';
import { Global, css } from '@emotion/core';
// import { HomePage } from '../RootComponents/HomePage';
// import { AboutPage } from '../RootComponents/AboutPage/AboutPage';
import { theme } from '../../util/theme';
import { Root, Routes } from 'react-static';
import { Router } from '@reach/router';
import { Layout } from './Layout';
import '../../normalize.css';
// import { ContactPage } from '../RootComponents/ContactPage';
// import { Post } from '../Blog/Views/Post';
// import { routes } from '../../util/routes';
// import { Category } from '../Blog/Views/Category';
// import { Tag } from '../Blog/Views/Tag';
// import { Alloy } from '../Projects/Alloy/Alloy';
// import { Homebrewery } from '../Projects/Homebrewery/Homebrewery';
// import { Search } from '../Blog/Views/Search';
// import { HelmetProvider } from 'react-helmet-async';

// Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(['dynamic']);

const { color, typography, space } = theme;
const globalStyles = css`
  html {
    box-sizing: border-box;
    color: ${color.text};
    font-family: ${typography.fontFamily};
    font-size: ${typography.baseFontSize};
  }
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
    .muted {
      color: ${color.mutedText};
    }
  }

  /* Headline */
  h1 {
    font-size: ${typography.headline.size};
    font-weight: ${typography.headline.weight};
    line-height: ${typography.headline.lineHeight};
  }
  /* Title */
  h2 {
    font-size: ${typography.title.size};
    font-weight: ${typography.title.weight};
    line-height: ${typography.title.lineHeight};
  }
  /* Subheading */
  h3 {
    font-size: ${typography.subheading.size};
    font-weight: ${typography.subheading.weight};
    line-height: ${typography.subheading.lineHeight};
    margin-bottom: ${typography.subheading.marginBottom!};
  }
  /* Lead text */
  h4 {
    font-size: ${typography.leading.size};
    font-weight: ${typography.leading.weight};
    line-height: ${typography.leading.lineHeight};
    margin-bottom: ${typography.leading.marginBottom!};
  }
  p {
    font-size: ${typography.body.size};
    font-weight: ${typography.body.weight};
    line-height: ${typography.body.lineHeight};
    margin-bottom: ${typography.body.marginBottom!};
    code {
      background-color: ${color.accent}15;
      padding-left: ${space.xs};
      padding-right: ${space.xs};
      border-radius: ${space.s};
    }
  }

  ol > li,
  ul > li {
    margin-bottom: ${space.s};
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

export const App: React.FC = props => {
  return (
    <Root>
      <Global styles={globalStyles} />
      <Layout>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </Layout>
    </Root>
  );
};

// function App() {
//   return (
//     <Root>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/blog">Blog</Link>
//         <Link to="/dynamic">Dynamic</Link>
//       </nav>
//       <div className="content">
//         <FancyDiv>
//           <React.Suspense fallback={<em>Loading...</em>}>
//             <Router>
//               <Dynamic path="dynamic" />
//               <Routes path="*" />
//             </Router>
//           </React.Suspense>
//         </FancyDiv>
//       </div>
//     </Root>
//   );
// }

// export default App;
