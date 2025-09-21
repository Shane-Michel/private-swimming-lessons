import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage/HomePage'
import Footer from './Components/Footer/Footer'
import ContactPage from './Pages/ContactPage/ContactPage'
import ReviewsPage from './Pages/ReviewsPage/ReviewsPage'
import VideosPage from './Pages/VideosPage/VideosPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/reviews' element={<ReviewsPage />} />
        <Route path='/videos' element={<VideosPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
