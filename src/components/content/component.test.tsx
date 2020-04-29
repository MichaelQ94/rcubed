import { shallow } from "enzyme";
import React from "react";
import Content from "./component";
import { Box } from "ui";

describe("<Content /> renders", () => {
  it("should render properly", () => {
    const wrapper = shallow(<Content />);
    expect(wrapper.exists(".content")).toEqual(true);
    expect(wrapper.exists(Box)).toEqual(true);
  });
});
