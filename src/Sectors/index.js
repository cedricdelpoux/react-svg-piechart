import PropTypes from "prop-types"
import React from "react"

import Sector from "../Sector"

const Sectors = ({
  center,
  data,
  onSectorHover,
  expandSize,
  strokeWidth,
  strokeColor,
  ...props
}) => {
  const total = data.reduce((prev, current) => current.value + prev, 0)
  let angleStart = 0
  let angleEnd = 0
  return total > 0 ? (
    <g>
      {data.map((d, i) => {
        const isLarge = d.value / total > 0.5
        const angle = 360 * d.value / total
        const radius = center + (d.expanded ? expandSize : 0) - strokeWidth / 2

        angleStart = angleEnd
        angleEnd = angleStart + angle

        const x1 = center + radius * Math.cos(Math.PI * angleStart / 180)
        const y1 = center + radius * Math.sin(Math.PI * angleStart / 180)
        const x2 = center + radius * Math.cos(Math.PI * angleEnd / 180)
        const y2 = center + radius * Math.sin(Math.PI * angleEnd / 180)
        const path = `
          M${center},${center}
          L${x1},${y1}
          A${radius},${radius}
          0 ${isLarge ? 1 : 0},1
          ${x2},${y2}
          z
        `

        return (
          <Sector
            key={"sector" + i}
            fill={d.color}
            path={path}
            strokeColor={strokeColor}
            strokeWidth={strokeWidth}
            total={total}
            onMouseEnter={e => onSectorHover(d, i, e)}
            onMouseLeave={e => onSectorHover(null, null, e)}
            onTouchEnd={e => onSectorHover(null, null, e)}
            onTouchStart={e => onSectorHover(d, i, e)}
            {...props}
            {...d}
          />
        )
      })}
    </g>
  ) : null
}

Sectors.propTypes = {
  center: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      title: PropTypes.string,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  onSectorHover: PropTypes.func,
  expandSize: PropTypes.number,
  strokeColor: Sector.propTypes.strokeColor,
  strokeWidth: Sector.propTypes.strokeWidth,
}

Sectors.defaultProps = {
  expandSize: 5,
}

export default Sectors
