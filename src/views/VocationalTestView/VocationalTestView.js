import './VocationalTestView.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { DismissableModal } from "../../components";


const VocationalTestView = () => {
  const navigate = useNavigate()

  const goToQuizz = () => {
    navigate('/quiz')
  }

  const [isModalVisible] = useState(true)

  return (
    <div className='vocationalTest'>
      <header className="header">Teste vocacional</header>
      <DismissableModal
        modalData={{
          title: 'Teste vocacional',
          message: 'Vamos fazer um teste para sugerir a trilha de carreira mais adequada de acordo com suas características e objetivos.',
          buttonData: 'Prosseguir para teste',
          iconPath: './CheckCircle.svg'
        }}
        onDismiss={goToQuizz}
        isVisible={isModalVisible}
      />
    </div>
  )
}

export default VocationalTestView