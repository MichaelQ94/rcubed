import * as React from "react";
import Content from "components/content";
import SideBar from "components/sidebar";
import { Display, JustifyContent, Layout } from "ui";
import "./app.scss";

type AppProps = {};

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <Layout
      display={Display.Flex}
      justifyContent={JustifyContent.SpaceBetween}
      className="container"
    >
      <SideBar />
      <Content />
    </Layout>
  );
};

export default App;
