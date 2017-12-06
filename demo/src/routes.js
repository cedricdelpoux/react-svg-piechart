import React from "react"
import ReactSvgPieChart from "../../src"

import readmeHtml from "../../README.md"
import LonelyData from "./examples/Lonely"
import interactiveHtml from "./examples/Interactive/index.md"

const data = [
  {title: "Data 1", value: 100, color: "#22594e", expanded: true},
  {title: "Data 2", value: 60, color: "#2f7d6d"},
  {title: "Data 3", value: 30, color: "#3da18d"},
  {title: "Data 4", value: 20, color: "#69c2b0"},
  {title: "Data 5", value: 10, color: "#a1d9ce"},
]

const routes = [
  {
    path: "/",
    exact: true,
    demo: {
      component: (
        <ReactSvgPieChart
          data={data}
          expandOnHover
          onSectorHover={(d, index, e) =>
            d &&
            // eslint-disable-next-line
            console.log("Index:", index, "Data:", d, "Event:", e)
          }
        />
      ),
      hiddenProps: ["data", "onSectorHover"],
      displayName: "ReactSvgPieChart",
      html: interactiveHtml,
    },
    label: "Interactive demo",
  },
  {
    path: "/lonely",
    component: <LonelyData />,
    label: "One data",
  },
  {
    path: "/readme",
    html: readmeHtml,
    label: "Read me",
  },
]

export default routes
