import { shallow } from "enzyme";
import React from "react";
import Stopwatch from "components/stopwatch";

describe("Stopwatch Component", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should initialize text to say 'Start'", () => {
    const wrapper = shallow(<Stopwatch />);
    const displayedText = wrapper.find("span.elapsedTime").text();
    expect(displayedText).toEqual("Start");
  });

  it("should set text to 0 seconds on click", () => {
    const wrapper = shallow(<Stopwatch />);
    wrapper.find(".boxContainer").simulate("click");

    const displayedText = wrapper.find("span.elapsedTime").text();
    expect(displayedText).toEqual("0.00");
  });

  it("should update the text after every 10ms", () => {
    const wrapper = shallow(<Stopwatch />);
    jest.useFakeTimers();

    wrapper.find(".boxContainer").simulate("click");

    [...new Array(10)].reduce(previousText => {
      jest.advanceTimersByTime(10);
      const displayedText = wrapper.find("span.elapsedTime").text();
      expect(displayedText).not.toEqual(previousText);

      return displayedText;
    }, wrapper.find("span.elapsedTime").text());

    jest.useRealTimers();
  });

  it("should increment text using performance.now()", () => {
    const performanceReturnValues = [0, 1, 2, 3, 4, 5];
    performanceReturnValues.reduce((spy, val) => {
      return spy.mockReturnValueOnce(val);
    }, jest.spyOn(performance, "now"));

    const wrapper = shallow(<Stopwatch />);
    jest.useFakeTimers();

    wrapper.find(".boxContainer").simulate("click");

    performanceReturnValues.forEach(val => {
      jest.advanceTimersByTime(10);
      const displayedText = wrapper.find("span.elapsedTime").text();
      expect(displayedText).toEqual(`0.0${val}`);
    });

    jest.useRealTimers();
  });

  it("should stop updating the text on a subsequent click");
});
