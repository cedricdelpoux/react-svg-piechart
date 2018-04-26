import {mount, shallow, configure} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import React from "react"
import Circle from "./index"

configure({adapter: new Adapter()})

const onMouseEnter = jest.fn()
const onMouseLeave = jest.fn()
const onTouchEnd = jest.fn()
const onTouchStart = jest.fn()
const props = {
  color: "#000",
  center: 50,
  radius: 50,
}
const title = "Title"
const CircleFixture = (
  <Circle
    {...props}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onTouchEnd={onTouchEnd}
    onTouchStart={onTouchStart}
  />
)
const CircleWithTitleFixture = <Circle {...props} title={title} />

describe("Circle", () => {
  it("renders", () => {
    mount(CircleFixture)
  })

  it("generates <title>", () => {
    const Circle = shallow(CircleWithTitleFixture)
    expect(Circle.html()).toContain(`<title>${title}</title>`)
  })

  it("calls onMouseEnter when mouse enter on circle", () => {
    const circle = shallow(CircleFixture)
    circle.simulate("mouseEnter")

    expect(onMouseEnter).toHaveBeenCalled()
    expect(onMouseEnter).toHaveBeenCalledTimes(1)
  })

  it("calls onSectorHover when mouse leave from circle", () => {
    const circle = shallow(CircleFixture)
    circle.simulate("mouseLeave")

    expect(onMouseLeave).toHaveBeenCalled()
    expect(onMouseLeave).toHaveBeenCalledTimes(1)
  })

  it("calls onSectorHover when user start to touch the circle", () => {
    const circle = shallow(CircleFixture)
    circle.simulate("touchStart")

    expect(onTouchStart).toHaveBeenCalled()
    expect(onTouchStart).toHaveBeenCalledTimes(1)
  })

  it("calls onSectorHover when user end to touch the circle", () => {
    const circle = shallow(CircleFixture)
    circle.simulate("touchEnd")

    expect(onTouchEnd).toHaveBeenCalled()
    expect(onTouchEnd).toHaveBeenCalledTimes(1)
  })
})
