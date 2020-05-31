import * as React from "react";
import Scramble from "components/scramble";
import Stopwatch from "components/stopwatch";
import { Layout, Display, JustifyContent, AlignItems, FlexDirection } from "ui";
import "./style.scss";

type PublicProps = {};

const Content: React.FunctionComponent<PublicProps> = () => {
  return (
    <Layout
      display={Display.Flex}
      flexDirection={FlexDirection.Column}
      justifyContent={JustifyContent.Center}
      alignItems={AlignItems.Center}
      padding={{ x: 1, y: 1 }}
      className="content"
      fullWidth
    >
      <Stopwatch />
      <Scramble />
    </Layout>
  );
};

export default Content;
