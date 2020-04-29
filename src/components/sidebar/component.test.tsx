import { shallow } from "enzyme";
import React from "react";
import SideBar from "components/sidebar/component";

describe("<SideBar /> renders", () => {
  it("should render properly", () => {
    const wrapper = shallow(<SideBar />);
    expect(wrapper.exists(".sidebar")).toEqual(true);
    expect(wrapper.find("h1").text()).toEqual("RCUBED");
  });
});
