import * as React from "react";
import { Layout, Display, JustifyContent, AlignItems } from "ui";
import "./style.scss";

type PublicProps = {};

const Content: React.FunctionComponent<PublicProps> = () => {
  return (
    <Layout
      display={Display.Flex}
      justifyContent={JustifyContent.Center}
      alignItems={AlignItems.Center}
      padding={{ x: 1, y: 1 }}
      className="content"
      fullWidth
    >
      TIMER
    </Layout>
  );
};

export default Content;
