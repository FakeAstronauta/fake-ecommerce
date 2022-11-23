import { Routes, Route, Link } from "react-router-dom"
import Home from './UI/pages/Home'

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}

export default App
