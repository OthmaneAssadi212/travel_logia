import { Routes, Route } from 'react-router-dom'
import AboutUsSection from './pages/about'
import Layout from './Layout'
import BlogPreviewSection from "./componenents/BlogPreviewSection"
import AddBlogSection from "./componenents/AddBlogSection"
import Home from './componenents/Home'

import AddBlogPage from './components/AddBlogPage'
import BlogsPage from "./componenents/BlogsPage";

import Register from './componenents/partials/register'
import LoginForm from './componenents/partials/loginForm'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        
        
       
        <Route path="" element={<Home />} /> 
       
        <Route path="about" element={<AboutUsSection />} /> 
        
        <Route path="blog/add" element={<AddBlogPage />} />  
        <Route path="/blogs" element={<BlogsPage />} />


        <Route path='register' element={<Register/>}/>
                <Route path="login" element={<LoginForm />} /> 

        <Route path="blog" element={<BlogPreviewSection />} /> 
        <Route path="blog/add" element={<AddBlogPage />} /> 
 
      </Route>
    </Routes>

  )
}


export default App
