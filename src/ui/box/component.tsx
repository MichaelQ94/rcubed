import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";
import { Layout } from "ui/layout";
import "./style.scss";

interface PublicProps {
  children?: ReactNode;
}

const Box: FunctionComponent<PublicProps> = (props: PublicProps) => {
  const boxClass = classNames(["box"]);

  return (
    <Layout
      margin={{ x: 1, y: 1 }}
      padding={{ x: 1, y: 1 }}
      className={boxClass}
    >
      {props.children}
    </Layout>
  );
};

export default Box;
