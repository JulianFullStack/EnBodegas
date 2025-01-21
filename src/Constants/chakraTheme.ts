import { extendTheme } from "@chakra-ui/react" 

const Button ={
    variants:{
        itemButton:{
            color: 'white',
            bgColor: "#4369ca",
            width: "100%",
            height: "5vh",
            fontSize: "120%",
            marginTop:"1vh",
            w: [ "100%", "100%", "50%", "50%", "30%"  ]
        }
    }
}
export const theme = extendTheme ({components: {Button}})