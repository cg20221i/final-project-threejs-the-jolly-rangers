import React from 'react'
import {Sidebar, DisplayTitle} from './components'

function App() {
  return (
    <div>
      <Sidebar/>
      
      {/* Container */}
      <div className='pl-16'>
        <DisplayTitle/>
      </div>
    </div>
  )
}

export default App
