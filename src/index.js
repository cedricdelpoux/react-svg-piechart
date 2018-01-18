import React from "react"
import PropTypes from "prop-types"

import Circle from "./Circle"
import Sectors from "./Sectors"
import Sector from "./Sector"

class PieChart extends React.Component {
  state = {expandedIndex: null}

  handleSectorHover = (data, index, e) => {
    const {expandOnHover, onSectorHover} = this.props

    if (expandOnHover) {
      this.setState({expandedIndex: index})
    }

    if (onSectorHover) {
      onSectorHover(data, index, e)
    }
  }

  renderSingleData(d, center) {
    const {expandedIndex} = this.state
    const {expandOnHover, expandSize} = this.props
    return (
      <Circle
        center={center}
        radius={
          center +
          (d.expanded || (expandOnHover && expandedIndex === 0)
            ? expandSize
            : 0)
        }
        onMouseEnter={e => this.handleSectorHover(d, 0, e)}
        onMouseLeave={e => this.handleSectorHover(null, null, e)}
        onTouchEnd={e => this.handleSectorHover(null, null, e)}
        onTouchStart={e => this.handleSectorHover(d, 0, e)}
        {...d}
      />
    )
  }

  renderMultipleData(center) {
    const {expandedIndex} = this.state
    const {data, expandOnHover, ...props} = this.props
    return (
      <Sectors
        center={center}
        data={
          expandOnHover
            ? data.map((d, i) => ({
                ...d,
                expanded: i === expandedIndex,
              }))
            : data
        }
        {...props}
        onSectorHover={this.handleSectorHover}
      />
    )
  }

  shouldExpand = () => {
    const {data, expandOnHover} = this.props
    const oneDataIsExpanded = data.some(d => d.expanded)
    return oneDataIsExpanded || expandOnHover
  }

  render() {
    const {data, expandSize, viewBoxSize} = this.props
    const center = viewBoxSize / 2
    const offset = this.shouldExpand() ? expandSize : 0
    const dataWithValue = data.filter(d => d.value > 0)
    return dataWithValue && dataWithValue.length > 0 ? (
      <svg
        viewBox={`0 0 ${viewBoxSize + offset * 2} ${viewBoxSize + offset * 2}`}
      >
        <g transform={`translate(${offset}, ${offset})`}>
          {dataWithValue.length === 1
            ? this.renderSingleData(dataWithValue[0], center)
            : this.renderMultipleData(center)}
        </g>
      </svg>
    ) : null
  }
}

PieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      title: PropTypes.string,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  expandOnHover: PropTypes.bool,
  expandSize: PropTypes.number,
  onSectorHover: PropTypes.func,
  strokeColor: Sector.propTypes.strokeColor,
  strokeLinejoin: Sector.propTypes.strokeLinejoin,
  strokeWidth: Sector.propTypes.strokeWidth,
  viewBoxSize: PropTypes.number,
}

PieChart.defaultProps = {
  data: [],
  expandOnHover: false,
  expandSize: Sectors.defaultProps.expandSize,
  onSectorHover: null,
  shrinkOnTouchEnd: false,
  strokeColor: Sector.defaultProps.strokeColor,
  strokeLinejoin: Sector.defaultProps.strokeLinejoin,
  strokeWidth: Sector.defaultProps.strokeWidth,
  viewBoxSize: 100,
}

export default PieChart
