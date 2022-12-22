import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from '../UI/organisms/navbar/Navbar'
import Home from '../pages/home'

function Template() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default Template
