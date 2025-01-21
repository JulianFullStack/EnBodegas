
import { Button} from "@chakra-ui/react"
import React  from 'react';
function Fond() {
  var button = document.createElement("button");
            button.type = "button"
            button.innerText = "Boton"
            document.body.appendChild(button)
  return (    
    <Button disabled> {'< Pag 1 de 1 >'}</Button>
  );
}
export default Fond;


    
   
    
    
    