import './JobsView.css';

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { DismissableModal } from "../../components";

const JobsView = () => {
    const navigate = useNavigate()
  
    const goToJobsList = () => {
      navigate('/jobsList')
    }
  
    const [isModalVisible] = useState(true)
  
    return (
      <div className='jobsContainer'>
        <DismissableModal
          modalData={{
            title: 'Vagas do Mercado',
            message: 'Vamos te mostrar as vagas disponíveis mais próximas de você e, a partir do que elas pedirem, montar uma trilha personalizada para você.',
            buttonData: 'Prosseguir',
            iconPath: './HandPayCircle.svg'
          }}
          onDismiss={goToJobsList}
          isVisible={isModalVisible}
        />
      </div>
    )
  }
  
  export default JobsView;