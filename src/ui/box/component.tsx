import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";
import { Layout } from "ui/layout";
import "./style.scss";

type BoxProps = {
  children?: ReactNode;
  className?: string;
  onClick?: PropsOf<typeof Layout>["onClick"];
};

const Box: FunctionComponent<BoxProps> = (props: BoxProps) => {
  const boxClass = classNames(["box", props?.className]);

  return (
    <Layout
      margin={{ x: 1, y: 1 }}
      padding={{ x: 1, y: 1 }}
      className={boxClass}
      onClick={props?.onClick}
    >
      {props.children}
    </Layout>
  );
};

export default Box;
