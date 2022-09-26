import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom'

import logo from '../../images/logo.png';
import './PostSignupView.css';

function PostSignupView() {
  const navigate = useNavigate()

  const goToVocationalTest = () => {
    navigate('/vocationalTest')
  }

  const goToJobs = () => {
    navigate('/jobs')
  }

  return (
    <div className='postSignupView'>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:500,600,700" rel="stylesheet"></link>
        <img className='logoImage' src={logo}/>
        <div>
          <p className='title'>Cadastro finalizado!</p>
          <p className='default'>Agora que finalizamos seu cadastro, você decide como quer continuar!</p>
          <p className='default'>Você pode fazer uma avaliação pra recomendarmos a melhor trilha pra você com o <span className="bolded">Teste Vocacional</span>, ou pode navegar pelas vagas de mercado próximas a você e criar uma <span className="bolded">Trilha Personalizada</span> com base nas habilidades pedidas pela empresa.</p>
        </div>
        <div className="buttonContainer">
          <p><a className='button' onClick={goToVocationalTest}>Teste Vocacional</a></p>
          {/* <p><a className='button' onClick={goToJobs}>Vagas do Mercado</a></p> */}
        </div>
    </div>
  );
}

export default PostSignupView;
