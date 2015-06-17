import React, { PropTypes } from 'react'

export default class PieChart {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.number,
      color: PropTypes.string,
    })),
    palette: PropTypes.arrayOf(PropTypes.string),
    sectorStrokeWidth: PropTypes.number,
    expandOnHover: PropTypes.bool,
    expandedSector: PropTypes.number,
    onSectorHover: PropTypes.func,
    expandPx: PropTypes.number,
    viewBoxWidth: PropTypes.number,
  }

  static defaultProps = {
    data: [],
    palette: [
      '#2ecc71',
      '#3498db',
      '#9b59b6',
      '#f1c40f',
      '#e67e22',
      '#e74c3c',
      '#1abc9c',
    ],
    sectorStrokeWidth: 3,
    expandOnHover: true,
    expandedSector: null,
    expandPx: 10,
    viewBoxWidth: 300,
  }

  handleMouseEnterOnSector(i) {
    const { onMouseEnterOnSector } = this.props

    if (onMouseEnterOnSector) {
      onMouseEnterOnSector(i)
    }
  }

  handleMouseLeaveFromSector() {
    const { onMouseLeaveFromSector } = this.props

    if (onMouseLeaveFromSector) {
      onMouseLeaveFromSector(null)
    }
  }

  getSectors() {
    const { data, palette, sectorStrokeWidth, expandOnHover, expandedSector, expandPx, viewBoxWidth } = this.props
    const total = Math.ceil(data.reduce((n, d) => d.value + n, 0))
    const center = viewBoxWidth / 2
    let startAngle = 0
    let endAngle = 0

    return (
      data.map((d, i) => {
        const expandVal = expandOnHover && expandedSector === i ? expandPx : 0
        const angle = 360 * d.value / total

        startAngle = endAngle
        endAngle = startAngle + angle

        const x1 = Math.round(center + (center + expandVal) * Math.cos(Math.PI * startAngle / 180))
        const y1 = Math.round(center + (center + expandVal) * Math.sin(Math.PI * startAngle / 180))

        const x2 = Math.round(center + (center + expandVal) * Math.cos(Math.PI * endAngle / 180))
        const y2 = Math.round(center + (center + expandVal) * Math.sin(Math.PI * endAngle / 180))

        const dPath =
          'M' + center + ',' + center + ' ' +
          'L' + x1 + ',' + y1 + ' ' +
          'A' + (center + expandVal) + ',' + (center + expandVal) + ' 0 0,1 ' + x2 + ',' + y2 + ' ' +
          'z'

        return (
          <path
            key={ 'sector' + i }
            d={ dPath }
            fill={ d.color || palette[i % palette.length] }
            stroke="#fff"
            strokeWidth={ sectorStrokeWidth }
            onMouseEnter={ () => this.handleMouseEnterOnSector(i) }
            onMouseLeave={ () => this.handleMouseLeaveFromSector() } />
        )
      })
    )
  }

  render() {
    const { expandPx, viewBoxWidth, props } = this.props
    return (
      <svg viewBox={ `0 0 ${viewBoxWidth + expandPx * 2} ${viewBoxWidth + expandPx * 2}` } { ...props }>
        <g transform={`translate(${expandPx}, ${expandPx})`}>
          { this.getSectors() }
        </g>
      </svg>
  )}
}
