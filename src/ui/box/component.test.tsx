import { shallow } from "enzyme";
import React from "react";
import { Box } from "ui";

describe("<Box /> renders", () => {
  it("should wrap HTML elements", () => {
    const wrapper = shallow(
      <Box>
        <div className="test-selector" />
      </Box>,
    );
    expect(wrapper.exists(".test-selector")).toEqual(true);
  });
});
