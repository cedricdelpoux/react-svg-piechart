import {mount, shallow, configure} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import React from "react"
import Sector from "./index"

configure({adapter: new Adapter()})

const onMouseEnter = jest.fn()
const onMouseLeave = jest.fn()
const onTouchEnd = jest.fn()
const onTouchStart = jest.fn()
const props = {
  fill: "#000",
  path: `
    M150,150
    L-2.0796363178978083,194.65461025936668
    A158.5,158.5
    0 0,1
    127.44309813368429,-6.886698538127831
    z
  `,
}
const title = "Title"
const SectorFixture = (
  <Sector
    {...props}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  />
)
const SectorWithTitleFixture = <Sector {...props} title={title} />

describe("Sector", () => {
  it("renders", () => {
    mount(SectorFixture)
  })

  it("generates <title>", () => {
    const Sector = shallow(SectorWithTitleFixture)
    expect(Sector.html()).toContain(`<title>${title}</title>`)
  })

  it("calls onSectorHover when mouse enter on sector", () => {
    const sector = shallow(SectorFixture)
    sector.simulate("mouseEnter")

    expect(onMouseEnter).toHaveBeenCalled()
    expect(onMouseEnter).toHaveBeenCalledTimes(1)
  })

  it("calls onSectorHover when mouse leave from sector", () => {
    const sector = shallow(SectorFixture)
    sector.simulate("mouseLeave")

    expect(onMouseLeave).toHaveBeenCalled()
    expect(onMouseLeave).toHaveBeenCalledTimes(1)
  })

  it("calls onSectorHover when user start to touch the sector", () => {
    const sector = shallow(SectorFixture)
    sector.simulate("touchStart")

    expect(onTouchStart).toHaveBeenCalled()
    expect(onTouchStart).toHaveBeenCalledTimes(1)
  })

  it("calls onSectorHover when user end to touch the sector", () => {
    const sector = shallow(SectorFixture)
    sector.simulate("touchEnd")

    expect(onTouchEnd).toHaveBeenCalled()
    expect(onTouchEnd).toHaveBeenCalledTimes(1)
  })
})
