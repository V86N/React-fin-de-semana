import './App.css'
import Header from './components/Header/Header'
import ListNews from './components/ListNews/ListNews'
import Form from './components/Form/Form'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';

function App() {
  

  return (
    
      <div>
       <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ListNews" element={<ListNews/>} />
          <Route path="/Form" element={<Form />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </div>
     
  )
}

export default App
