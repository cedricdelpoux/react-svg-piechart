import React, {Component} from "react"
import PropTypes from "prop-types"

class PieChart extends Component {
  handleSectorHover(i, e) {
    if (e.type === "touchend" && !this.props.shrinkOnTouchEnd) return
    e.preventDefault()
    if (this.props.onSectorHover) {
      this.props.onSectorHover(i)
    }
  }

  getSector() {
    const {data, expandOnHover, expandPx, expandedSector, palette, viewBoxWidth} = this.props
    const center = viewBoxWidth / 2
    const expandVal = expandOnHover && expandedSector === 0 ? expandPx : 0
    return (
      <ellipse
        fill={data[0].color || palette[0]}
        onTouchStart={(e) => this.handleSectorHover(0, e)}
        onTouchEnd={(e) => this.handleSectorHover(null, e)}
        onMouseEnter={(e) => this.handleSectorHover(0, e)}
        onMouseLeave={(e) => this.handleSectorHover(null, e)}
        cx={center} cy={center} rx={center + expandVal} ry={center + expandVal}
      />
    )
  }

  getSectors() {
    const {data, palette, sectorStrokeWidth, expandOnHover, expandedSector, expandPx, viewBoxWidth} = this.props
    const total = Math.ceil(data.reduce((prev, current) => current.value + prev, 0))
    const center = viewBoxWidth / 2
    let startAngle = 0
    let endAngle = 0

    return (
      data.map((d, i) => {
        const expandVal = expandOnHover && expandedSector === i ? expandPx : 0
        const angle = 360 * d.value / total
        const largeArc = (d.value / total) <= 0.5 ? 0 : 1

        startAngle = endAngle
        endAngle = startAngle + angle

        const x1 = Math.round(center + (center + expandVal) * Math.cos(Math.PI * startAngle / 180))
        const y1 = Math.round(center + (center + expandVal) * Math.sin(Math.PI * startAngle / 180))

        const x2 = Math.round(center + (center + expandVal) * Math.cos(Math.PI * endAngle / 180))
        const y2 = Math.round(center + (center + expandVal) * Math.sin(Math.PI * endAngle / 180))

        const dPath =
          "M" + center + "," + center + " " +
          "L" + x1 + "," + y1 + " " +
          "A" + (center + expandVal) + "," + (center + expandVal) + " 0 " + largeArc + ",1 " + x2 + "," + y2 + " " +
          "z"

        return (
          <path
            key={"sector" + i}
            d={dPath}
            fill={d.color || palette[i % palette.length]}
            stroke="#fff"
            strokeWidth={sectorStrokeWidth}
            onTouchStart={(e) => this.handleSectorHover(i, e)}
            onTouchEnd={(e) => this.handleSectorHover(null, e)}
            onMouseEnter={(e) => this.handleSectorHover(i, e)}
            onMouseLeave={(e) => this.handleSectorHover(null, e)}
          />
        )
      })
    )
  }

  render() {
    const {className, data, expandPx, viewBoxWidth} = this.props
    return (
      <svg className={className} viewBox={`0 0 ${viewBoxWidth + expandPx * 2} ${viewBoxWidth + expandPx * 2}`}>
        <g transform={`translate(${expandPx}, ${expandPx})`}>
          {data.length === 1
            ? this.getSector()
            : this.getSectors()
          }
        </g>
      </svg>
    )
  }
}

PieChart.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    color: PropTypes.string,
  })),
  palette: PropTypes.arrayOf(PropTypes.string),
  sectorStrokeWidth: PropTypes.number,
  expandOnHover: PropTypes.bool,
  shrinkOnTouchEnd: PropTypes.bool,
  expandedSector: PropTypes.number,
  onSectorHover: PropTypes.func,
  expandPx: PropTypes.number,
  viewBoxWidth: PropTypes.number,
}

PieChart.defaultProps = {
  data: [],
  palette: [
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#f1c40f",
    "#e67e22",
    "#e74c3c",
    "#1abc9c",
  ],
  sectorStrokeWidth: 3,
  expandOnHover: true,
  shrinkOnTouchEnd: false,
  expandedSector: null,
  expandPx: 10,
  viewBoxWidth: 300,
}

export default PieChart
