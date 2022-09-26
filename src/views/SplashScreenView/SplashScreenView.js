import './SplashScreenView.css';

import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components';

const SplashScreenView = () => {
  const navigate = useNavigate()

  const navigateToPostSignup = () => {
    navigate('/postSignup')
  }

  const interval = setTimeout(() => {
    navigateToPostSignup()

    clearTimeout(interval)
  }, 3000)

  return (
    <div className='container'>
      <Icon path={'./Logo.svg'} className='logo'/>
    </div>
  )
}

export default SplashScreenView