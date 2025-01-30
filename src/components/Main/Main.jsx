import React from 'react'
import './Main.css';
import { assets } from '../../assets/assets';
const Main = () => {
  return (
    <div className='Main'>
        <div className="nav">
            <p>
                Ohm
            </p>
            <img src={assets.user_icon} alt="" />
        </div>
      <div className="main-container">
        <div className="greet">
            <p>
                <span>
                    Hello!
                </span>
            </p>
            <p>
            What's on your mind today?
            </p>
        </div>
        <div className="cards">
            <div className="card">
                <p>
                Feeling stressed. Suggest inhaling exhaling calming exercises.</p>
                <img src={assets.exercise_icon} alt="" />     
            </div>
            <div className="card">
                <p>
                Suggest daily affirmation: ‘I am capable, strong, and can handle this.’ </p>
                <img src={assets.affirm_icon} alt="" />     
            </div>
            <div className="card">
                <p>
                Give some Journaling tips. </p>
                <img src={assets.journal_icon} alt="" />     
            </div>
            <div className="card">
                <p>
                Suggest a balanced diet which can help in uplifting the mood</p>
                <img src={assets.health_icon} alt="" />     
            </div>
        </div>
        <div className="Main-bottom">
            <div className="search-box">
                <input type="text" placeholder='Enter prompt here'/>
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className='bottom-info'>
                 Always Double check your responses!
            </p>



        </div>
      </div>
    </div>
  )
}

export default Main
