import PropTypes from "prop-types"
import React from "react"

const Sector = ({
  fill,
  strokeColor,
  strokeLinejoin,
  strokeWidth,
  onTouchStart,
  onTouchEnd,
  onMouseEnter,
  onMouseLeave,
  path,
  title,
}) => {
  return (
    <path
      d={path}
      fill={fill}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinejoin={strokeLinejoin}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {title && <title>{title}</title>}
    </path>
  )
}

Sector.propTypes = {
  fill: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onTouchEnd: PropTypes.func,
  onTouchStart: PropTypes.func,
  path: PropTypes.string.isRequired,
  strokeColor: PropTypes.string,
  strokeLinejoin: PropTypes.string,
  strokeWidth: PropTypes.number,
  title: PropTypes.string,
}

Sector.defaultProps = {
  strokeColor: "#fff",
  strokeWidth: 1,
  strokeLinejoin: "round",
  title: null,
}

export default Sector
