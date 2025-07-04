import { Routes, Route } from 'react-router-dom'
import AboutUsSection from './pages/about'
import Layout from './Layout'
import BlogPreviewSection from "./componenents/BlogPreviewSection"
import AddBlogSection from "./componenents/AddBlogSection"
import Home from './componenents/Home'
import BlogsPage from "./componenents/BlogsPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        
        <Route path="" element={<Home />} />
        <Route path="about" element={<AboutUsSection />} /> 
        <Route path="blog" element={<BlogPreviewSection />} />  
        <Route path="blo" element={<AddBlogSection />} />  
        <Route path="/blogs" element={<BlogsPage />} />

      </Route>
    </Routes>

  )
}


export default App
