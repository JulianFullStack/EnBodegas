import { Box,Image } from "@chakra-ui/react";
import { backgroundAboutNavbar } from "../../Constants/PublicStyle.ts";
import React  from 'react';
function NavBar() { 
  return (    
      <Box sx={backgroundAboutNavbar}> 
        <Box display= "grid" gridTemplateColumns= "60% 40%">
          <Box marginTop={"2%"} marginLeft={"10%"}>
            <Box>
              <Image height= "51px" src={"https://res.cloudinary.com/dlnc8e8ts/image/upload/v1735498388/CV/x5yie9g8zubokggdmr8b.png"} alt="" />
            </Box>
          </Box>
          <Box marginTop={"17px"} display= "grid" gridTemplateColumns= "33% 33% 33%">
            <Box display= {"flex"} alignItems={"center"} justifyContent={"right"}>
              <Image height= "40px" src={"https://res.cloudinary.com/dlnc8e8ts/image/upload/v1735747834/CV/zdjtjzakrreq3vcusptx.png"} alt="" />
            </Box >
            <Box display= {"flex"} alignItems={"center"} justifyContent={"center"}>
              <Image height= "40px" src= {"https://res.cloudinary.com/dlnc8e8ts/image/upload/v1735747064/CV/uscnokfuuutg1hfan8uh.png"} alt="" />
            </Box>
            <Box display= {"flex"} alignItems={"center"} justifyContent={"left"}>
              <Image height= "40px" src= {"https://res.cloudinary.com/dlnc8e8ts/image/upload/v1735747064/CV/bbfikdag0isljhyugzaq.png"}  alt="" />
            </Box>
          </Box>
        </Box>
      </Box>    
  );
}
export default NavBar;
//display= "flex" justifyContent= "right" alignItems="center"