import * as React from "react";

type AppProps = {
  message: string;
};

const App: React.FunctionComponent<AppProps> = (props: AppProps) => {
  return <h1>{props.message}</h1>;
};

export default App;
