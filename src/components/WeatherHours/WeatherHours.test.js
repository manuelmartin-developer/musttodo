import React from "react";
import { shallow } from "enzyme";
import WeatherHours from "./WeatherHours";

describe("WeatherHours", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WeatherHours />);
    expect(wrapper).toMatchSnapshot();
  });
});
