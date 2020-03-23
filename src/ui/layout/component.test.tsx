import React from "react";
import { shallow } from "enzyme";
import Layout from "./component";
import * as Models from "./models";

describe("<Layout /> renders", () => {
  it("should append className", () => {
    const wrapper = shallow(<Layout className="test-selector" />);
    expect(wrapper.exists(".test-selector")).toEqual(true);
  });

  describe("should append padding", () => {
    it("accepts x and y", () => {
      const wrapper = shallow(<Layout padding={{ x: 1, y: 1 }} />);
      expect(wrapper.exists(".px-1")).toEqual(true);
      expect(wrapper.exists(".py-1")).toEqual(true);
    });

    it("accepts cardinal directions", () => {
      const wrapper = shallow(<Layout padding={{ t: 1, r: 1, b: 1, l: 1 }} />);
      expect(wrapper.exists(".pt-1")).toEqual(true);
      expect(wrapper.exists(".pr-1")).toEqual(true);
      expect(wrapper.exists(".pb-1")).toEqual(true);
      expect(wrapper.exists(".pl-1")).toEqual(true);
    });
  });

  describe("should append margin", () => {
    it("accepts x and y", () => {
      const wrapper = shallow(<Layout margin={{ x: 1, y: 1 }} />);
      expect(wrapper.exists(".mx-1")).toEqual(true);
      expect(wrapper.exists(".my-1")).toEqual(true);
    });

    it("accepts cardinal directions", () => {
      const wrapper = shallow(<Layout margin={{ t: 1, r: 1, b: 1, l: 1 }} />);
      expect(wrapper.exists(".mt-1")).toEqual(true);
      expect(wrapper.exists(".mr-1")).toEqual(true);
      expect(wrapper.exists(".mb-1")).toEqual(true);
      expect(wrapper.exists(".ml-1")).toEqual(true);
    });
  });

  describe("should append position", () => {
    it("accepts relative position", () => {
      const wrapper = shallow(<Layout position={Models.Position.Relative} />);
      expect(wrapper.exists(".relative")).toEqual(true);
    });
    it("accepts absolute position", () => {
      const wrapper = shallow(<Layout position={Models.Position.Absolute} />);
      expect(wrapper.exists(".absolute")).toEqual(true);
    });
  });

  describe("should append display", () => {
    it("accepts flex", () => {
      const wrapper = shallow(<Layout display={Models.Display.Flex} />);
      expect(wrapper.exists(".flex")).toEqual(true);
    });
    it("accepts block", () => {
      const wrapper = shallow(<Layout display={Models.Display.Block} />);
      expect(wrapper.exists(".block")).toEqual(true);
    });
    it("accepts inline", () => {
      const wrapper = shallow(<Layout display={Models.Display.Inline} />);
      expect(wrapper.exists(".inline")).toEqual(true);
    });
  });

  describe("should append flex properties", () => {
    it("should append a flex direction", () => {
      const wrapper = shallow(
        <Layout flexDirection={Models.FlexDirection.Row} />,
      );
      expect(wrapper.exists(".flex-row")).toEqual(true);
    });

    it("should append a flex wrap", () => {
      const wrapper = shallow(<Layout flexWrap={Models.FlexWrap.NoWrap} />);
      expect(wrapper.exists(".flex-no-wrap")).toEqual(true);
    });

    it("should append a flex justify content", () => {
      const wrapper = shallow(
        <Layout justifyContent={Models.JustifyContent.Center} />,
      );
      expect(wrapper.exists(".flex-justify-center")).toEqual(true);
    });

    it("should append a flex align items", () => {
      const wrapper = shallow(<Layout alignItems={Models.AlignItems.Center} />);
      expect(wrapper.exists(".flex-align-items-center")).toEqual(true);
    });

    it("should append a flex align content", () => {
      const wrapper = shallow(
        <Layout alignContent={Models.AlignContent.Center} />,
      );
      expect(wrapper.exists(".flex-align-content-center")).toEqual(true);
    });
  });
});
