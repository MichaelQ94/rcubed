import * as React from "react";
import Stopwatch from "components/stopwatch";
import {
  Layout,
  Display,
  JustifyContent,
  AlignItems,
  Box,
  FlexDirection,
} from "ui";
import "./style.scss";

type PublicProps = {};

const Content: React.FunctionComponent<PublicProps> = () => {
  const scramble = "B2 U2 L2 B2 F U2 R2 F L2 F U2 R' D2 U F2 U' B F' R B2";

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
      <Box>
        <Stopwatch />
      </Box>
      <Box>
        <span className="scramble">{scramble}</span>
      </Box>
    </Layout>
  );
};

export default Content;
