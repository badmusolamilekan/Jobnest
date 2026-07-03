import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import JobDetails from "./pages/JobDetails";


export default function App(){
  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/job/:id" element={<JobDetails />} />
    </Routes>
    </>
  )
}