import * as React from "react";
import * as System from "~/components/system";

import * as Constants from "~/common/constants";
import * as Actions from "~/common/actions";

import { css } from "@emotion/react";

import WebsitePrototypeWrapper from "~/components/core/WebsitePrototypeWrapper";

const STYLES_ROOT = css`
padding: 128px 88px 256px 88px;
  @media (max-width: 768px) {
    padding: 128px 24px 128px 24px;
  }
  }
`;

const STYLES_HERO = css`
  
  font-size: 56px;
  line-height: 160%;
  }
`;
const STYLES_FEATURES = css`
  padding: 25px;
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

        <System.SiteFooter />
        </div>
      </WebsitePrototypeWrapper>
    );
  }
}
