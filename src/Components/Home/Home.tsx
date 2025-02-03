import {Box,Grid,SimpleGrid} from "@chakra-ui/react"
import NavBar from "../NavBarBasic/NavBar.tsx";
import Pag from "../Pag/Pag.tsx";
import { Select } from "@chakra-ui/select"
import  {MyCard}  from "../Card/Card.tsx";
import { menu } from "../../Constants/PublicConst.ts";
import { products } from "../../Constants/PublicConst.ts";
import React  from 'react';
export default () => {
  const scroll =() => {
    let counter = window.scrollY;
    let intervalId = setInterval(() => {
    counter=counter-200;
    console.log(counter);
    window.scroll(0, counter)
    if (counter < 1) {
      window.scroll(0, 0)      
        clearInterval(intervalId);
    }
}, 10);
  }
  return (
    <Grid >        
      <NavBar/>
      <Box  bg={"#4369ca"} color={"white"} display= {"flex"} alignItems={"end"} justifyContent={"center"}>
        <Grid  gridTemplateColumns={"50% 50%"} w={"400px"} marginBottom={"5px"}>
        <Select w={"190px"} bg={"whithe"} color={"#4369ca"} textAlign={"center"} placeholder="Orden alfabetico" h={"30px"}>
          <option value="2">Orden por Precio</option>
          <option value="3">Orden por Descuento</option>
        </Select>
        <Select w={"190px"} bg={"whithe"} color={"#4369ca"} textAlign={"center"} placeholder= {menu.Menu1} h={"30px"}>
          <option value="2">{menu.Menu2}</option>
          <option value="2">{menu.Menu3}</option>
          <option value="2">{menu.Menu4}</option>
          <option value="2">{menu.Menu5}</option>
          <option value="2">{menu.Menu6}</option>
          <option value="2" color="gray">{menu.Menu7}</option>
        </Select>
        </Grid>
      </Box>
      <Box zIndex={"999"} bottom= "15px" right= "6px" position= "fixed"  width= "20px" onClick={()=>{scroll()}} >   
        <img  src="https://res.cloudinary.com/dlnc8e8ts/image/upload/v1737232759/CV/fthopygpdngsupmfja7z.png" alt=""/>
      </Box>
        <SimpleGrid p={"10px"} spacing={10} minChildWidth={"250px"}>
        {products.map((prod) => (<MyCard Products={prod} />))}
        {products.map((prod) => (<MyCard Products={prod} />))}
        {products.map((prod) => (<MyCard Products={prod} />))}
        {products.map((prod) => (<MyCard Products={prod} />))}
        </SimpleGrid>  
        <Pag/>
    </Grid>
  );
}