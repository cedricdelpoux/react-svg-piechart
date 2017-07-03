# react-svg-piechart ![npm](https://img.shields.io/npm/v/react-svg-piechart.svg) ![license](https://img.shields.io/npm/l/react-svg-piechart.svg) ![github-issues](https://img.shields.io/github/issues/xuopled/react-svg-piechart.svg)

A lightweight responsive pie chart component for React using only SVG

## Install

```sh
npm install --save react-svg-piechart
```

[![react-svg-piechart](https://nodei.co/npm/react-svg-piechart.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-svg-piechart/)

## Changelog

See [changelog](./CHANGELOG.md)

## Usage

### Exemple

![PieChart exemple](/screenshots/socialchart.png)

```js
import React, {Component} from "react"
import PieChart from "react-svg-piechart"

export default class MyComponent extends Component {
    constructor() {
        super()

        this.state = {
            expandedSector: null,
        }

        this.handleMouseEnterOnSector = this.handleMouseEnterOnSector.bind(this)
    }

    handleMouseEnterOnSector(sector) {
        this.setState({expandedSector: sector})
    }

    render() {
        const data = [
            {label: "Facebook", value: 100, color: "#3b5998"},
            {label: "Twitter", value: 60, color: "#00aced"},
            {label: "Google Plus", value: 30, color: "#dd4b39"},
            {label: "Pinterest", value: 20, color: "#cb2027"},
            {label: "Linked In", value: 10, color: "#007bb6"},
        ]

        const {expandedSector} = this.state

        return (
            <div>
                <PieChart
                    data={ data }
                    expandedSector={expandedSector}
                    onSectorHover={this.handleMouseEnterOnSector}
                    sectorStrokeWidth={2}
                    expandOnHover
                    shrinkOnTouchEnd
                />
                <div>
                {
                    data.map((element, i) => (
                        <div key={i}>
                            <span style={{background: element.color}}></span>
                            <span style={{fontWeight: this.state.expandedSector === i ? "bold" : null}}>
                                {element.label} : {element.value}
                            </span>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}
```

### Props

    * `data`: Array - by default is empty. Contains objects with keys `value`and `color` (optionnal)
    * `palette`: Array - by default palette contains 7 hexadecimal colors
    * `sectorStrokeWidth`: Number - by default is 3
    * `expandOnHover`: Boolean - by default is true
    * `expandedSector`: Number - by default is null
    * `onSectorHover`: Function - by default is null
    * `expandPx`: Number - by default is 10,
    * `viewBoxWidth`: Number - by default is 300. Chart is responsive

## License

See [MIT](./LICENCE)
