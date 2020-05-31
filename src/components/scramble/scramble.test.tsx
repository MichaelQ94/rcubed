import { shallow } from "enzyme";
import React from "react";
import Scramble from "./scramble";
import { Box } from "ui";

describe("<Scramble /> renders", () => {
  it("should render properly", () => {
    const wrapper = shallow(<Scramble />);
    expect(wrapper.exists(".scramble")).toEqual(true);
    expect(wrapper.exists(Box)).toEqual(true);
  });
});
