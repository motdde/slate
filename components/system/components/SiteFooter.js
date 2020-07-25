import * as React from "react";
import * as Constants from "~/common/constants";

import { css } from "@emotion/react";

const STYLES_FOOTER = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 88px 0px;
  font-family: ${Constants.font.text};

`;

const STYLES_FOOTERLINKS = css`
  display: flex;
  a{
    margin-left: 20px;
    text-decoration: none;
  }
`;



export class SiteFooter extends React.Component {
  

  render() {
    return (
      <div css={STYLES_FOOTER} >
          <p>Powered by <a href="https://textile.io">Textile</a> and <a href="https://filecoin.io">Filecoin</a></p>
          <div css={STYLES_FOOTERLINKS} >
                <a href="/system">Slack</a>
                <a href="">Contact</a>
          </div>
      
      </div>
    );
  }
}
