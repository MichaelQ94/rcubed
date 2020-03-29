import * as React from "react";
import { Display, JustifyContent, Layout } from "ui";
import "./style.scss";

type PublicProps = {};

const SideBar: React.FunctionComponent<PublicProps> = () => {
  return (
    <Layout
      display={Display.Flex}
      justifyContent={JustifyContent.Center}
      className="sidebar"
    >
      <Layout
        margin={{ x: 0, y: 0 }}
        padding={{ x: 1, y: 1 }}
        className="header"
      >
        <h1 className="shifting-rainbow-text">RCUBED</h1>
      </Layout>
    </Layout>
  );
};

export default SideBar;
