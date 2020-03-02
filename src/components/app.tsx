import * as React from "react";

type AppProps = {
  message: string
};

export const App: React.FunctionComponent<AppProps> = (props: AppProps) => {
  return <h1>{props.message}</h1>;
};
