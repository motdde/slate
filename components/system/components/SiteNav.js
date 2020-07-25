import * as React from "react";
import * as Constants from "~/common/constants";

import { css } from "@emotion/react";

const STYLES_NAV = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 88px 0px;
  font-family: ${Constants.font.text};

`;

const STYLES_NAVLINKS = css`
  display: flex;
  a{
    margin-left: 20px;
    text-decoration none;
  }
`;



export class SiteNav extends React.Component {
  

  render() {
    return (
      <div css={STYLES_NAV}>
         <a href="/">Slate {Constants.values.version}</a>
         <div css={STYLES_NAVLINKS}>
            <a href="/system">Design System</a>
            <a href="/commmunity-guidelines">Commmunity Guidelines</a>
         </div>
        
      </div>
    );
  }
}
