import React from "react";
import { shallow } from "enzyme";
import App from "./app";

describe("<App /> renders", () => {
  it("should render properly", () => {
    const wrapper = shallow(<App message={"test"} />);
    expect(wrapper.find("h1").text()).toEqual("test");
  });
});
