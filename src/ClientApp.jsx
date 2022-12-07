import React from 'react'
import {BrowserRouter, Route ,Routes} from 'react-router-dom'



function ClientApp() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/confirm" />
                    
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default ClientApp