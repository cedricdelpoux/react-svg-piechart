import {mount, shallow, configure} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import React from "react"

import Sectors from "./index"

configure({adapter: new Adapter()})

const onSectorHover = jest.fn()
const d1 = {value: 100, color: "#22594e"}
const data = [
  ...d1,
  {value: 60, color: "#2f7d6d", expanded: true},
  {value: 30, color: "#3da18d"},
  {value: 20, color: "#69c2b0"},
  {value: 10, color: "#a1d9ce"},
]
const SectorsFixture = (
  <Sectors data={data} center={50} onSectorHover={onSectorHover} />
)
const SectorsNoHoverFixture = <Sectors data={data} center={50} />
const SectorsLargeArcFixture = <Sectors data={[d1]} center={50} />

describe("Sectors", () => {
  it("renders", () => {
    mount(SectorsFixture)
    mount(SectorsNoHoverFixture)
    mount(SectorsLargeArcFixture)
  })

  it("calls onSectorHover when mouse enter on sector", () => {
    const sector = shallow(SectorsFixture)
    sector
      .find("Sector")
      .first()
      .simulate("mouseEnter")

    expect(onSectorHover).toHaveBeenCalled()
    expect(onSectorHover).toHaveBeenCalledTimes(1)
  })

  it("calls onSectorHover when mouse leave from sector", () => {
    const sector = shallow(SectorsFixture)
    sector
      .find("Sector")
      .first()
      .simulate("mouseLeave")

    expect(onSectorHover).toHaveBeenCalled()
    expect(onSectorHover).toHaveBeenCalledTimes(2)
  })

  it("calls onSectorHover when user start to touch the sector", () => {
    const sector = shallow(SectorsFixture)
    sector
      .find("Sector")
      .first()
      .simulate("touchStart")

    expect(onSectorHover).toHaveBeenCalled()
    expect(onSectorHover).toHaveBeenCalledTimes(3)
  })

  it("calls onSectorHover when user end to touch the sector", () => {
    const sector = shallow(SectorsFixture)
    sector
      .find("Sector")
      .first()
      .simulate("touchEnd")

    expect(onSectorHover).toHaveBeenCalled()
    expect(onSectorHover).toHaveBeenCalledTimes(4)
  })
})
