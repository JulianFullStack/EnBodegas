import React  from 'react';
import { Image, Box} from "@chakra-ui/react"
import { image } from "../../Constants/PublicConst.ts";
function Fond() {
  return (     
    <Box  opacity={"0.2"}>
      <Image top={"82vh"} left={"10%"} position={"absolute"} src= {image.Fondo7}  alt="Fail"/>
      <Image top={"70vh"} left={"85%"} position={"absolute"} src= {image.Fondo8}  alt="Fail"/>
      <Image top={"54vh"} left={"0%"} position={"absolute"} src= {image.Fondo1}  alt="Fail"/>
      <Image top={"0vh"} left={"85%"} position={"absolute"} src= {image.Fondo2}  alt="Fail"/>
      <Image top={"10vh"} left={"0%"} position={"absolute"} src= {image.Fondo3}  alt="Fail"/>
      <Image top={"85vh"} left={"50%"} position={"absolute"} src= {image.Fondo4}  alt="Fail"/>
      <Image top={"8vh"} left={"40%"} position={"absolute"} src= {image.Fondo9}  alt="Fail"/>
      <Image top={"73vh"} left={"35%"} position={"absolute"} src= {image.Fondo9}  alt="Fail"/>
    </Box>
  );
}
export default Fond;


    
   
    
    
    