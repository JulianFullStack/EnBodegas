import {Box, Image, Button, Link} from "@chakra-ui/react"
//import Fond from '../Fond/Fond.tsx'
import NavBar from '../NavBarBasic/NavBar.tsx'
import React  from 'react';
const Start = () => {

    return  (
        <Box>
            {/*<Fond/>*/}
            <NavBar/>
            <Box margin= "2vh" h= "82vh">
                <Box > 
                    <Box display= "grid" gridTemplateColumns = "65% 35%">                                 
                        <Box  display = {"flex"}    justifyContent= {"right"}>
                            <Image h= "160px" src= {"https://res.cloudinary.com/dlnc8e8ts/image/upload/v1736129203/CV/slqpezvcandwfgfkpbtf.png"}  alt="" />
                        </Box >
                        <Box display = {"flex"}    justifyContent= {"right"}>
                            <Image h= "150px" src= {"https://res.cloudinary.com/dlnc8e8ts/image/upload/v1735498003/CV/nfwrsjtqgdqziicgm3hy.png"}  alt="" />
                        </Box>
                    </Box>                      
                </Box> 
                <Box textAlign={"center"} > 
                    <Link href="/home"><Button variant={"itemButton"}>ACCESORIOS CELULARES</Button></Link> <br />
                    <Link href="/home"><Button variant={"itemButton"}>BAFLES</Button></Link> <br />
                    <Link href="/home"><Button variant={"itemButton"}>YANBAL</Button></Link> <br />
                    <Link href="/home"><Button variant={"itemButton"}>CAMARAS DE VIGILANCIA</Button></Link> <br />
                    <Link href="/home"><Button variant={"itemButton"}>ELECTRODOMESTICOS</Button></Link> <br />
                    <Link href="/home"><Button variant={"itemButton"}>PAPELERIA</Button></Link> <br />
                    <Link href="/home"><Button variant={"itemButton"}>MOTEROS</Button></Link>                 
                </Box>                           
            </Box>
        </Box>
    )
}
export default Start;
