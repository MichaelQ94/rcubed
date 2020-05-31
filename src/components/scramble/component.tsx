import * as React from "react";
import { Box } from "ui";
import "./style.scss";

type PublicProps = {};

const Scramble: React.FunctionComponent<PublicProps> = () => {
  const scramble = "B2 U2 L2 B2 F U2 R2 F L2 F U2 R' D2 U F2 U' B F' R B2";

  return (
    <Box>
      <span className="scramble">{scramble}</span>
    </Box>
  );
};

export default Scramble;
