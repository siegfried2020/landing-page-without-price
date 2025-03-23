import { useState } from 'react'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
// import './App.css'
import './landing page.css'
import './queries.css'
import Active from "./assets/images/active shower gel.jpeg"
import Cherry from "./assets/images/cherry shower gel.jpeg"
import Classic from "./assets/images/classic shower gel.jpeg"
import Dream from "./assets/images/dream shower gel.jpeg"
import Honey from "./assets/images/shower gel honey.jpeg"
import Sport from "./assets/images/sport shower gel.jpeg"
import Tropical from "./assets/images/tropical shower gel.jpeg"
import Shampoo from "./assets/images/shampoo.jpeg"
import Conditioner from "./assets/images/conditioner.jpeg"
import Mango from "./assets/images/Mango hand soap.jpeg"
import Cherry_hand_wash from "./assets/images/cherry hand soap.jpeg"
function App() {
  const [count, setCount] = useState(0)

  return(
    <div style={{backgroundColor:"rgb(11, 25, 86)"}} className="">
      <header class="header-container">
      
      <h1>Shower gel</h1>
      
      
      </header>
  
      <div class="products grid-template-3">
        <div class="product-img">
          <p>Active (سوفاج)</p>
          <img src={Active} alt=""/>
          
        </div>
      
        <div class="product-img">
          <p>Cherry (كريز)</p>
          <img src={Cherry} alt=""/>
          
        </div>
      
        <div class="product-img">
          <p>Classic (عود)</p>
          <img src={Classic} alt=""/>
          
        </div>
      
        <div class="product-img">
          <p>Dream (سيدكشن)</p>
          <img src={Dream} alt=""/>
          
        </div>
      
        <div class="product-img">
          <p>Honey (عسل)</p>
          <img src={Honey} alt=""/>
          
        </div>
      
        <div class="product-img">
          <p>Sport(نعناع)</p>
          <img src={Sport} alt=""/>
          
        </div>
      
        <div class="product-img">
          <p>Tropical (كيوي)</p>
          <img src={Tropical} alt=""/>
          
        </div>
      </div>

      {/* shampoo and conditioner */}

      <header class="header-container shampoo-conditioner">
        <div>
          <h1>Shampoo ( للشعر الدهني فقط ) to sell </h1>
        </div>
        <div>
          <h1>Conditioner (لكل انواع الشعر) to sell </h1>
          
        </div>
      </header>

      <div class="products grid-template-3">

        <div class="product-img">
          <p>Shampoo (الشامبو) </p>
          <img src={Shampoo} alt=""/>
        </div>

        <div class="product-img">
          <p>Conditioner (البلسم)</p>
          <img src={Conditioner} alt=""/>
        </div>

      </div>

      {/* Hand Wash  */}

      <header class="header-container hand-wash">
          
        <h1>Hand wash (مانجو و كريز) to sell </h1>
        
    
      </header>

      <div class="products grid-template-3">

        <div class="product-img">
          <p>Mango Hand Wash (مانجو)</p>
          <img src={Mango} alt=""/>
        </div>

        <div class="product-img">
          <p>Cherry Hand Wash (كريز)</p>
          <img src={Cherry_hand_wash} alt=""/>
        </div>

      </div>



    </div>
  );
    
      
}

    //  <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Dashboard/>}>Dashboard</Route>
    //       <Route path="/Shower-Gel" element={<ShowerGel/>}>Shower Gel</Route>
    //     </Routes>
    //  </BrowserRouter> 
export default App
