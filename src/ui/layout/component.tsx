import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";
import {
  AlignContent,
  AlignItems,
  Display,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  Position,
} from "./models";
import "./style.scss";

interface PublicProps {
  children?: ReactNode;
  className?: string;
  padding?: Padding;
  margin?: Margin;
  display?: Display;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  position?: Position;
}

interface Spacing {
  y?: Size;
  x?: Size;
  t?: Size;
  b?: Size;
  r?: Size;
  l?: Size;
  [key: string]: Size | undefined;
}

type Size = 1 | 2 | 3 | 4 | 5;
type Padding = Spacing;
type Margin = Spacing;
type Props = PublicProps;

const getPadding = (padding: Padding = {}): string[] => {
  const classes: string[] = [];

  Object.keys(padding).forEach(key => {
    classes.push(`p${key}-${padding[key]}`);
  });

  return classes;
};

const getMargin = (margin: Margin = {}): string[] => {
  const classes: string[] = [];

  Object.keys(margin).forEach(key => {
    classes.push(`m${key}-${margin[key]}`);
  });

  return classes;
};

const Layout: FunctionComponent<Props> = (props: Props) => {
  const paddingClass = classNames([
    props.className,
    ...getPadding(props.padding),
    ...getMargin(props.margin),
    props.display,
    props.flexDirection,
    props.flexWrap,
    props.justifyContent,
    props.alignItems,
    props.alignContent,
    props.position,
  ]);

  return <div className={paddingClass}>{props.children}</div>;
};

export default Layout;
