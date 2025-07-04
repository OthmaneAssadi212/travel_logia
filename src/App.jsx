import { Routes, Route } from 'react-router-dom'
import AboutUsSection from './pages/about'
import Layout from './Layout'
import BlogPreviewSection from "./componenents/BlogPreviewSection"
import Home from './componenents/Home'
import AddBlogPage from './components/AddBlogPage'
import Register from './componenents/partials/Register'
import LoginForm from './componenents/partials/loginForm'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        
        
       
        <Route path="" element={<Home />} /> 
       
        <Route path="about" element={<AboutUsSection />} /> 
        <Route path='register' element={<Register/>}/>
                <Route path="login" element={<LoginForm />} /> 

        <Route path="blog" element={<BlogPreviewSection />} /> 
        <Route path="blog/add" element={<AddBlogPage />} /> 
 
      </Route>
    </Routes>

  )
}


export default App
