import { shallow } from "enzyme";
import React from "react";
import App from "./app";

describe("<App /> renders", () => {
  it("should render properly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(".container")).toEqual(true);
  });
});
