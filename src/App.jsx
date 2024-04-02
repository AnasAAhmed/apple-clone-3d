import { useState } from "react"
import Chip from "./components/Chip"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Hihglights from "./components/Hihglights"
import Model from "./components/Model"
import Navbar from "./components/Navbar"


function App() {
 const [themeColor,setThemeColor]=useState(false)
  return (
   <main className={themeColor?"bg-white":"bg-black"}>
    <Navbar setThemeColor={setThemeColor} themeColor={themeColor}/>
    <Hero setThemeColor={setThemeColor} themeColor={themeColor}/>
    <div className={`fixed z-10 top-90 left-5 bottom-10`}>ssssss</div>
    <Hihglights setThemeColor={setThemeColor} themeColor={themeColor}/>
    <Model/>
    <Features setThemeColor={setThemeColor} themeColor={themeColor}/>
    <Chip/>
    <Footer/>

   </main>
  )
}

export default App
