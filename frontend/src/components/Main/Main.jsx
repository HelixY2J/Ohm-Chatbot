import React, { useState } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
const Main = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const csrfToken = window.CSRF_TOKEN;
        
        const res = await fetch('http://localhost:8000/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-CSRFToken': csrfToken,  
          },
          body: new URLSearchParams({
            'message': message,
          }),
        });
    
        const data = await res.json();
        setResponse(data.response); 
    };
    
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
            {/* <input type="text" placeholder='Enter prompt here'/> */}

            <input 
              type="text" 
              placeholder='Enter prompt here' 
              value={message}
              onChange={(e) => setMessage(e.target.value)} 
            />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    {/* <img src={assets.send_icon} alt="" /> */}
                    <img 
                        src={assets.send_icon} 
                        alt="Send" 
                        onClick={handleSubmit} // make POST
                    />
                </div>
            </div>
            <p className='bottom-info'>
                 Always Double check your responses!
            </p>

            {response && <div className="response-box">{response}</div>}

        </div>
      </div>
    </div>
  )
}

export default Main;
