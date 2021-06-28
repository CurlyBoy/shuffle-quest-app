import { React, ReactSubApp, createDynamicComponent, staticPropsFeature } from "@xarc/react";
import electrodePng from "../../static/electrode.png";
import { message } from "./message";

const Home = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        <a href="https://www.electrode.io">
          RYM5 <img src={electrodePng} />
        </a>
      </h1>
      <p>{message}</p>
      <p>props: {JSON.stringify(props)}</p>
    </div>
  );
};

export const subapp: ReactSubApp = {
  Component: Home,
  wantFeatures: [
    staticPropsFeature({
      serverModule: require.resolve("./static-props"),
    }),
  ],
};
