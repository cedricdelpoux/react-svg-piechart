# react-svg-piechart

A lightweight responsive pie chart component for React using only SVG

## Install

```sh
npm install --save react-svg-piechart
```

## Changelog

See [changelog](./CHANGELOG.md)

## Usage

### Exemple

![PieChart exemple](/screenshots/socialchart.png)

```js
import React, { Component } from 'react'
import { PieChart } from 'components/piechart'

export default class MyComponent extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      expandedSector: null,
    }
  }

  handleMouseEnterOnSector(sector) {
    this.setState({ expandedSector: sector })
  }

  handleMouseLeaveFromSector() {
    this.setState({ expandedSector: null })
  }

  render() {
    const data = [
      { label: 'Facebook', value: 100, color: '#3b5998' },
      { label: 'Twitter', value: 60, color: '#00aced' },
      { label: 'Google Plus', value: 30, color: '#dd4b39' },
      { label: 'Pinterest', value: 20, color: '#cb2027' },
      { label: 'Linked In', value: 10, color: '#007bb6' },
    ]

    return (
      <div>
        // PieChart component
        <PieChart
          data={ data }
          expandedSector={ this.state.expandedSector }
          onMouseEnterOnSector={ ::this.handleMouseEnterOnSector }
          onMouseLeaveFromSector={ ::this.handleMouseLeaveFromSector }
        />

        // Legend
        <div>
        {
          data.map((d, i) => (
            <div key={ i }>
              <span style={{ background: d.color }}></span>
              <span style={{ fontWeight: this.state.expandedSector == i ? 'bold' : null }}>
                { d.label } : { d.value }
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
