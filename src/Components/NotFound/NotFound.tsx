//import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import React  from 'react';
//import {searchImgSystem} from '../../redux/action/index'
import "./NotFound.css";
//import NavBar from '../NavBarBasic/NavBar'
//import About from '../About/About'
//import { URL_IMG_DEFAULT1 } from "../../redux/action/Constantes";
//import { useDispatch, useSelector } from "react-redux";
function NotFound() {
  
//const dispatch = useDispatch();
//  useEffect(() => {
//    dispatch (searchImgSystem());
//  },[dispatch]); 
  //const img = useSelector((state) => state.imgSystem); 
  
  return (
    <>
      <div id="NotF_1">
      {/*<NavBar/>*/}
        <div id="NotF_1B">
          <div id="NotF_1B1">          
            La página que buscas no existe
          </div>
          <div id="NotF_1B2">
            {/*<img id="NotF_1B2A" src= {img[6]?img[6].imgUrl:URL_IMG_DEFAULT1} className="App-logo" alt="" />   */}imagen
          </div>
          <div id="NotF_1B3">
            Estás intentando acceder a una página inexistente o sin permiso de acceso, para mayor información, contáctanos a través de nuestro chat en línea.
          </div>
          <div>
            <Link to="/">
            <button>INICIO</button>
            </Link>
          </div> 
        </div>             
        {/*<About/>*/}
      </div>
    </>
  );
}


export default NotFound;