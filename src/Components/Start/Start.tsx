import {Box, Image, Button, Link} from "@chakra-ui/react"
import { menu } from "../../Constants/PublicConst.ts";
import NavBar from '../NavBarBasic/NavBar.tsx'
import React  from 'react';
const Start = () => {

    return  (
        <Box>
            
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
                    <Link href="/8w"><Button variant={"itemButton"}>{menu.Menu1}</Button></Link> <br />
                    <Link href="/8w"><Button variant={"itemButton"}>{menu.Menu2}</Button></Link> <br />
                    <Link href="/8w"><Button variant={"itemButton"}>{menu.Menu3}</Button></Link> <br />
                    <Link href="/8w"><Button variant={"itemButton"}>{menu.Menu4}</Button></Link> <br />
                    <Link href="/8w"><Button variant={"itemButton"}>{menu.Menu5}</Button></Link> <br />
                    <Link href="/8w"><Button variant={"itemButton"}>{menu.Menu6}</Button></Link> <br />
                    <Link href="/8w"><Button variant={"itemButton"}>{menu.Menu7}</Button></Link>                 
                </Box>                           
            </Box>
        </Box>
    )
}
export default Start;
