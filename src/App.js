import Register from "./components/signUp/Register.js";
import Home from "./components/Home/Home.js";
import LoginForm from "./components/LoginForm/Index.js";
import Category from "./components/category/Category.js";
import CategoryItem from "./components/category/CategoryItem.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from './components/NotFound/index.js';

import ls from "local-storage";



import "./style.css";


function App() {
  const nullNote = { id: 9999999, title: "Add Title", note: "Add Notes", category: "Appointment" };

  const storedNotes = JSON.parse(ls.get("notes")) || [nullNote];

  const Myresume2 = () => {
    // You can use the `window.location.href` or another method to navigate to an external link
    window.location.href = 'https://vinodresume.tiiny.site';
    return null; // You can return null since you are redirecting externally
  };

  
  const pdfUrl = process.env.PUBLIC_URL + '/sample.pdf';  
  const samplePdf= "https://careered.stanford.edu/sites/g/files/sbiybj22801/files/media/file/resume-and-cover-letter-examples.pdf"
 

 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<Home note={storedNotes}  />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category" element={<Category />} />
        <Route
          path="/category/:id"
          element={<CategoryItem notes={storedNotes}  />}    />
     
        <Route path="/myresume" element={<div>
          <iframe title="PDF Viewer" width="100%" height="1000px" src={pdfUrl} />
        </div>} />
        <Route path="/myresume1" element={<div>
          <iframe title="PDF Viewer" width="100%" height="1000px" src={samplePdf} />
        </div>} />
        <Route path="/myresume2" element={<Myresume2 />} />


       


        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
