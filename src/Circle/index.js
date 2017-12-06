import PropTypes from "prop-types"
import React from "react"

import Sector from "../Sector"

const Circle = ({
  center,
  color,
  onMouseEnter,
  onMouseLeave,
  onTouchEnd,
  onTouchStart,
  radius,
  strokeColor,
  strokeWidth,
  title,
}) => (
  <ellipse
    cx={center}
    cy={center}
    fill={color}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onTouchEnd={onTouchEnd}
    onTouchStart={onTouchStart}
    rx={radius}
    ry={radius}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
  >
    {title && <title>{title}</title>}
  </ellipse>
)

Circle.propTypes = {
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onTouchEnd: PropTypes.func,
  onTouchStart: PropTypes.func,
  center: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  radius: PropTypes.number.isRequired,
  strokeColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  title: PropTypes.string,
}

Circle.defaultProps = {
  strokeColor: Sector.defaultProps.strokeColor,
  strokeWidth: Sector.defaultProps.strokeWidth,
}

export default Circle
