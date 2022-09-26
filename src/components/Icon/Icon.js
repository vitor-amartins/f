import './Icon.css'

import { 
  Avatar
} from 'antd'

import PropTypes from 'prop-types'

const Icon = ({ path, size, className }) => {
  const icons = require.context('../../assets/icons', true);
  const icon = icons(path)

  return (
    path ? 
    <div className="avatar">
      <Avatar
        size={size}
        src={icon}
        alt="Icon"
        className={className}
      />
    </div>
    : <div>Icon</div>
  )
}

Icon.propTypes = {
  path: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string
}

Icon.defaultProps = {
  size: 48,
  className: ''
}

export default Icon