import { Routes, Route } from 'react-router-dom'
import AboutUsSection from './pages/about'
import Layout from './Layout'
import BlogPreviewSection from "./componenents/BlogPreviewSection"
import Home from "./componenents/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        
        <Route path="" element={<Home />} />
        <Route path="about" element={<AboutUsSection />} /> 
        <Route path="blog" element={<BlogPreviewSection />} />  
      </Route>
    </Routes>

  )
}


export default App
