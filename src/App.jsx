import React from 'react'
import {Sidebar, DisplayTitle, LatestProduct} from './components'

function App() {
  return (
    <div>
      <Sidebar/>
      
      {/* Container */}
      <div className='pl-16'>
        <DisplayTitle/>
      </div>
      <div className='pl-16'>
        <LatestProduct/>
      </div>
    </div>
  )
}

export default App
