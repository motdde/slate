import * as React from "react";
import * as System from "~/components/system";

import * as Constants from "~/common/constants";
import * as Actions from "~/common/actions";

import { css } from "@emotion/react";

import WebsitePrototypeWrapper from "~/components/core/WebsitePrototypeWrapper";

const STYLES_ROOT = css`
  width:80%;
  margin-left:auto;
  margin-right:auto;
`;

const STYLES_HERO = css`
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 160%;
  }
`;
const STYLES_FEATURES = css`
  margin: 55px 0px;



  
  }
`;



export const getServerSideProps = async (context) => {
  return {
    props: { ...context.query },
  };
};

export default class IndexPage extends React.Component {
  async componentDidMount() {
    const response = await Actions.health();
    console.log("HEALTH_CHECK", response);
  }

  render() {
    const title = `Slate`;
    const description =
      "The place for all of your assets. Powered by Textile and Filecoin.";
    const url = "https://slate.host";

    return (
      <WebsitePrototypeWrapper
        title={title}
        description={description}
        url={url}
      >
        <div css={STYLES_ROOT}>
        <System.SiteNav />

        <section css={STYLES_HERO}>
          <System.H1>Store your files, turn them into collections, and share them with the world — with Slate.</System.H1>
          <br/>
          
          <System.H1><a>Store files -></a></System.H1>
        </section>

        <section css={STYLES_FEATURES}>
          <System.H3>Store Files</System.H3>
          <System.P>Slate is the first decentralized storage system made for everyone. Use slate to store:</System.P>
          <div>
            <System.UL>
              <System.LI>Cloud</System.LI>
              <System.LI>Cake</System.LI>
              <System.LI>Rainbow</System.LI>
            </System.UL>
          </div>
          <div>
            <p>Assets will go here</p>
          </div>
        </section>

        <section css={STYLES_FEATURES}>
          <System.H3>Create Slates</System.H3>
          <System.P>Organize and store your files into shareable collections. </System.P>
          <div>
            <System.UL>
              <System.LI>Cloud</System.LI>
              <System.LI>Cake</System.LI>
              <System.LI>Rainbow</System.LI>
            </System.UL>
          </div>
          <div>
            <p>Assets will go here</p>
          </div>
        </section>

        <section css={STYLES_FEATURES}>
          <System.H3>Share Them</System.H3>
          <System.P>Organize and store your files into shareable collections</System.P>
          <div>
            <System.UL>
              <System.LI>Cloud</System.LI>
              <System.LI>Cake</System.LI>
              <System.LI>Rainbow</System.LI>
            </System.UL>
          </div>
          <div>
            <p>Assets will go here</p>
          </div>
        </section>
     
        <System.SiteFooter />
        </div>
      </WebsitePrototypeWrapper>
    );
  }
}
