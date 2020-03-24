import classNames from "classnames";
import React, { PureComponent, ReactElement } from "react";
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

class Layout extends PureComponent<Props> {
  public render(): ReactElement {
    const paddingClass = classNames([
      this.props.className,
      ...this.getPadding(),
      ...this.getMargin(),
      this.props.display,
      this.props.flexDirection,
      this.props.flexWrap,
      this.props.justifyContent,
      this.props.alignItems,
      this.props.alignContent,
      this.props.position,
    ]);
    return <div className={paddingClass}>{this.props.children}</div>;
  }

  private getPadding(): string[] {
    const classes: string[] = [];
    const { padding } = this.props;

    if (!padding) {
      return [];
    }

    Object.keys(padding).forEach(key => {
      classes.push(`p${key}-${padding[key]}`);
    });

    return classes;
  }

  private getMargin(): string[] {
    const classes: string[] = [];
    const { margin } = this.props;

    if (!margin) {
      return [];
    }

    Object.keys(margin).forEach(key => {
      classes.push(`m${key}-${margin[key]}`);
    });
    return classes;
  }
}

export default Layout;
