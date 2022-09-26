import './DismissableModal.css'
import Icon from '../Icon'

import { 
  Modal,
  Button
} from 'antd'
import PropTypes from 'prop-types'


const DismissableModal = ({ modalData, onDismiss, isVisible }) => {
  return (
    <Modal
      visible={isVisible}
      closable={false}
      footer={
        <div>
          <Button
            block
            onClick={onDismiss}
          >
            { modalData?.buttonData }
          </Button>
        </div>
      }
      centered
      className="dismissableModal"
      maskStyle={{
        backdropFilter: 'blur(5px)'
      }}
    >
      <div className="avatar">
        <Icon path={modalData?.iconPath} />
      </div>
      <div className="title">
        { modalData?.title }
      </div>
      <div className="content">
        { modalData?.message }
      </div>
    </Modal>
    )
}

DismissableModal.propTypes = {
  modalData: PropTypes.shape({
    title: PropTypes.string,
    message: PropTypes.string,
    buttonData: PropTypes.string,
    iconPath: PropTypes.string.isRequired
  }).isRequired,
  onDismiss: PropTypes.func.isRequired,
  isVisible: PropTypes.bool
}

export default DismissableModal