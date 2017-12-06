import React from "react"
import {Html} from "react-demo-page"
import ReactSvgPieChart from "../../../../src"

import html from "./index.md"

const data = [{title: "Data 1", value: 100, color: "#22594e"}]

export default class Lonely extends React.Component {
  render() {
    return (
      <div>
        <Html html={html} color="#44B39D" />
        <ReactSvgPieChart
          data={data}
          sectorOffset={5}
          expandOnHover={true}
          onSectorHover={(d, index, e) =>
            d &&
            // eslint-disable-next-line
            console.log("Index:", index, "Data:", d, "Event:", e)
          }
        />
      </div>
    )
  }
}
