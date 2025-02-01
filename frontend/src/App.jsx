// import React from 'react'
// import Sidebar from './components/Sidebar/Sidebar'
// import Main from './components/Main/Main'
// const App = () => {
//   return (
//     <>
//       <Sidebar/>
//       <Main />
//     </>
//   )
// }

// export default App

import { useState } from "react"

import Sidebar from "./components/Sidebar/Sidebar"
import Main from "./components/Main/Main"
import HeroPage from "./components/HeroPage/HeroPage"
function App() {
  const [showChat, setShowChat] = useState(false)

  const handleChatStart = () => {
    setShowChat(true)
    console.log("Starting chat...")
  }

  return (
    <div className="App">
      {!showChat ? (
        <HeroPage onChatStart={handleChatStart} />
      ) : (
        <>
          <Sidebar />
          <Main />
        </>
      )}
    </div>
  )
}

export default App
