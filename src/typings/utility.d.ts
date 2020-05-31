import React from "react";

declare global {
  export type PropsOf<T> = T extends React.FunctionComponent<infer P>
    ? NonNullable<P>
    : unknown;
}
