import './App.css'
import { Routes, Route } from "react-router-dom";
import {Home, NewPostPage} from "./pages";
import { NavBar } from './components/navbar';


export default function App() {
  return (
      <div className = "App">
      <NavBar />
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path="new_post" element={<NewPostPage />} />                      
      </Routes>
  </div>
  );
}