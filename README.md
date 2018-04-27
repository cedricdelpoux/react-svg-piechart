# react-svg-piechart

[![npm package][npm-badge]][npm] [![Travis][build-badge]][build]
[![Codecov][codecov-badge]][codecov] ![Module formats][module-formats]

A lightweight responsive React pie chart component using only SVG

## Getting started

[![react-svg-piechart](https://nodei.co/npm/react-svg-piechart.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-svg-piechart/)

You can download `react-svg-piechart` from the NPM registry via the `npm` or
`yarn` commands

```shell
yarn add react-svg-piechart
npm install react-svg-piechart --save
```

If you don't use package manager and you want to include `react-svg-piechart`
directly in your html, you could get it from the UNPKG CDN

```html
https://unpkg.com/react-svg-piechart/umd/react-svg-piechart.js
```

## Demo

See [Demo page][github-page]

## Usage

```js
import React from "react"
import PieChart from "react-svg-piechart"

const data = [
  {title: "Data 1", value: 100, color: "#22594e"},
  {title: "Data 2", value: 60, color: "#2f7d6d"},
  {title: "Data 3", value: 30, color: "#3da18d"},
  {title: "Data 4", value: 20, color: "#69c2b0"},
  {title: "Data 5", value: 10, color: "#a1d9ce"},
]

const MyCompo = () => (
  <ReactSvgPieChart
    data={data}
    // If you need expand on hover (or touch) effect
    expandOnHover
    // If you need custom behavior when sector is hovered (or touched)
    onSectorHover={(d, i, e) => {
      if (d) {
        console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
      } else {
        console.log("Mouse leave - Index:", i, "Event:", e)
      }
    }
  />
)
```

### Props

| Name                     | PropType              | Description                                                                                                  | Default    |
| ------------------------ | --------------------- | ------------------------------------------------------------------------------------------------------------ | ---------- |
| data                     | Array of data Objects | One data is {value: number (required), color: string, title: string, expanded: bool}                         | []         |
| expandedIndex            | Number                | Pass in an index to manually control the expanded pie of the pie                                             | -1         |
| expandOnHover            | Boolean               | Active hover and touch (mobile) effetcs                                                                      | false      |
| onSectorHover            | Function              | Callback when one sector is hovered or touched (mobile) - ex: `(data, index, event) => {}`                   | null       |
| expandSize               | Number                | expand size, in pixels. Used if `expandOnHover` is active or one data has `expanded` attribute set to `true` |            |
| strokeColor              | String                | Sector stroke color                                                                                          | "#fff"     |
| strokeLinejoin           | String                | Sector stroke line join (One of `miter`, `round`, `bevel`)                                                   | "round"    |
| strokeWidth              | Number                | Sector width, in pixels (0 to disable stroke)                                                                | 1          |
| viewBoxSize              | Number                | SVG viewbox width and height                                                                                 | 100        |
| transitionDuration       | String                | CSS property for transition-duration, set to `0s` to disable transition                                      | "0s"       |
| transitionTimingFunction | String                | CSS Property for transition-timing-function                                                                  | "ease-out" |

## Contributing

*   ⇄ Pull/Merge requests and ★ Stars are always welcome.
*   For bugs and feature requests, please [create an issue][github-issue].
*   Pull requests must be accompanied by passing automated tests (`npm test`).

See [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines

## Changelog

See [changelog](./CHANGELOG.md)

## License

This project is licensed under the MIT License - see the
[LICENCE.md](./LICENCE.md) file for details

[npm-badge]: https://img.shields.io/npm/v/react-svg-piechart.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-svg-piechart
[build-badge]: https://img.shields.io/travis/xuopled/react-svg-piechart/master.svg?style=flat-square
[build]: https://travis-ci.org/xuopled/react-svg-piechart
[codecov-badge]: https://img.shields.io/codecov/c/github/xuopled/react-svg-piechart.svg?style=flat-square
[codecov]: https://codecov.io/gh/xuopled/react-svg-piechart
[module-formats]: https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg?style=flat-square
[github-page]: https://xuopled.github.io/react-svg-piechart
[github-issue]: https://github.com/xuopled/react-svg-piechart/issues/new
