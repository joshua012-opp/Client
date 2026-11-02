import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "./pages/admin/Contact";
import Home from "./pages/admin/Home";
import Form from "./pages/admin/Form";
import List from "./pages/admin/List";
import Fetch from "./components/Fetch";
import AdminLayout from "./pages/admin/AdminLayout";
import { createContext } from "react";
import  EmblaCarousel  from "./components/EmblaCarousel";

export const   MyContext = createContext("");
function App() {


  return (
    <MyContext value="larisa">
      <BrowserRouter>
      <Routes>
        <Route  element={<AdminLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/List" element={<List />} />
        </Route>


        <Route path="/Fetch" element={<Fetch />} />
        <Route path="/EmblaCarousel" element={<EmblaCarousel/>}/>

      </Routes>
    </BrowserRouter>
    </MyContext>
  )
}

export default App