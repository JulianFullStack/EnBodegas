import {Box, Select} from "@chakra-ui/react"
import NavBar from '../NavBarBasic/NavBar.tsx'
import React  from 'react';
const Car = () => {

    return  (
        <Box>            
            <NavBar/>
            <Box margin= "2vh" h= "82vh" textAlign={"left"} >
            <Box border={"solid silver 1px"} borderRadius={"5px"} padding={"5px"} margin = "0 auto" marginBottom={"15px"} maxW={"700px"} >
                    <Box display={"grid"} gridTemplateColumns={"90% 10%"}>                      
                    <Box>
                      <Box fontWeight={"bold"}>Camara de seguridad HD de 4 mp y WIFI 2.4</Box>
                      <Box color={"gray"} >(1 * $14.254.000 = $14.254.000)</Box>
                    </Box>
                    <Box textAlign={"center"} color={"#4369ca"} fontWeight={"bold"}>X</Box>
                    </Box>
                    <Box display={"flex"}>
                      <Select bg={"whithe"} color={"#4369ca"} textAlign={"right"} placeholder="1 unidad" h={"30px"}border ={"none"} focusBorderColor="Transparent" maxW={"45%"}>
                        <option value="200">2 unidades</option>
                        <option value="300">3 unidades</option>
                        <option value="300">4 unidades</option>
                      </Select>
                      <Select w={"45%"} bg={"whithe"} color={"#4369ca"} textAlign={"right"} placeholder="Rojo 125 GB" h={"30px"} border ={"none"}focusBorderColor="Transparent">
                        <option value="2">Rojo 256 gb</option>
                        <option value="3">Verde 125 GB</option>
                      </Select>
                    </Box>
                  </Box>
                  <Box border={"solid silver 1px"} borderRadius={"5px"} padding={"5px"} margin = "0 auto" marginBottom={"15px"} maxW={"700px"} >
                    <Box display={"grid"} gridTemplateColumns={"90% 10%"}>                      
                    <Box>
                      <Box fontWeight={"bold"}>Camara de seguridad HD de 4 mp y WIFI 2.4</Box>
                      <Box color={"gray"} >(1 * $14.254.000 = $14.254.000)</Box>
                    </Box>
                    <Box textAlign={"center"} color={"#4369ca"} fontWeight={"bold"}>X</Box>
                    </Box>
                    <Box display={"flex"}>
                      <Select bg={"whithe"} color={"#4369ca"} textAlign={"right"} placeholder="1 unidad" h={"30px"}border ={"none"} focusBorderColor="Transparent" maxW={"45%"}>
                        <option value="200">2 unidades</option>
                        <option value="300">3 unidades</option>
                        <option value="300">4 unidades</option>
                      </Select>
                      <Select w={"45%"} bg={"whithe"} color={"#4369ca"} textAlign={"right"} placeholder="Rojo 125 GB" h={"30px"} border ={"none"}focusBorderColor="Transparent">
                        <option value="2">Rojo 256 gb</option>
                        <option value="3">Verde 125 GB</option>
                      </Select>
                    </Box>
                  </Box>
                  <Box border={"solid silver 1px"} borderRadius={"5px"} padding={"5px"} margin = "0 auto" marginBottom={"15px"} maxW={"700px"} >
                    <Box display={"grid"} gridTemplateColumns={"90% 10%"}>                      
                    <Box>
                      <Box fontWeight={"bold"}>Camara de seguridad HD de 4 mp y WIFI 2.4</Box>
                      <Box color={"gray"} >(1 * $14.254.000 = $14.254.000)</Box>
                    </Box>
                    <Box textAlign={"center"} color={"#4369ca"} fontWeight={"bold"}>X</Box>
                    </Box>
                    <Box display={"flex"}>
                      <Select bg={"whithe"} color={"#4369ca"} textAlign={"right"} placeholder="1 unidad" h={"30px"}border ={"none"} focusBorderColor="Transparent" maxW={"45%"}>
                        <option value="200">2 unidades</option>
                        <option value="300">3 unidades</option>
                        <option value="300">4 unidades</option>
                      </Select>
                      <Select w={"45%"} bg={"whithe"} color={"#4369ca"} textAlign={"right"} placeholder="Rojo 125 GB" h={"30px"} border ={"none"}focusBorderColor="Transparent">
                        <option value="2">Rojo 256 gb</option>
                        <option value="3">Verde 125 GB</option>
                      </Select>
                    </Box>
                  </Box>
                  <Box>Total a pagar</Box>
            </Box>
        </Box>
    )
}
export default Car;