import { useState } from 'react'
import Header from './components/Header';
function App() {
  const [showHeader, setShowHeader] = useState(true);
  
  function hideHeader(){
    setShowHeader(false)
  }

  return (
    <div className="bg-slate-900 h-screen">
      {
        (showHeader) ? <Header HideHeader={() => hideHeader()} /> : ''
      }
      <h1>Hi</h1>
    </div>
  )
}

export default App
