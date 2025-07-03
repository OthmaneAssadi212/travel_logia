import { Routes, Route } from 'react-router-dom'
import AboutUsSection from './pages/about'
import Layout from './Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        <Route path="about" element={<AboutUsSection />} />
      </Route>
    </Routes>
  )
}

export default App
