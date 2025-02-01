import React, { useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets.js';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className='sidebar min-h-screen flex flex-col justify-between bg-[#f0f4f9] p-6'>
      <div className="top">
        {/* Menu Icon */}
        <img
          onClick={() => setExtended(prev => !prev)}
          className='menu w-8 cursor-pointer hover:text-[#4b90ff] transition-all duration-300'
          src={assets.menuicon}
          alt="Menu"
        />

        {/* New Chat */}
        <div className="new-chat mt-12 flex items-center gap-4 bg-[#e6eaf1] p-3 rounded-full text-sm text-gray-500 hover:bg-[#d0d7e0] transition-all duration-300 cursor-pointer">
          <img src={assets.plus_icon} alt="New Chat" className="w-5" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {/* Recent Chats Section */}
        {extended ? (
          <div className="recent mt-8">
            <p className="recent-title text-gray-600 font-semibold text-lg">Recent</p>
            <div className="recent-entry flex items-center gap-4 p-3 rounded-full text-gray-800 hover:bg-[#e2e6eb] cursor-pointer transition-all duration-300">
              <img src={assets.message_icon} alt="Message" className="w-10 h-10 rounded-full" />
              <p>Feeling sad?...</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="bottom mt-8">
        {/* Bottom Items (Help, Activity, Settings) */}
        <div className="bottom-item recent-entry flex items-center gap-4 p-3 cursor-pointer hover:bg-[#e2e6eb] transition-all duration-300">
          <img src={assets.question_icon} alt="Help" className="w-8" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry flex items-center gap-4 p-3 cursor-pointer hover:bg-[#e2e6eb] transition-all duration-300">
          <img src={assets.history_icon} alt="Activity" className="w-8" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry flex items-center gap-4 p-3 cursor-pointer hover:bg-[#e2e6eb] transition-all duration-300">
          <img src={assets.setting_icon} alt="Settings" className="w-8" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
