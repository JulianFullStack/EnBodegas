import { Card, CardBody,Image,Stack, Text,Divider,Heading,CardFooter,ButtonGroup,Button, Grid } from "@chakra-ui/react"
import React  from 'react';
export function MyCard() {
  return (    
    <Card maxW='sm'>
  <CardBody bg={"transparent"}>
    <Image src='https://img.freepik.com/fotos-premium/toma-cuadrada-telefono-celular-pantalla-blanco-sobre-fondo-neon_116547-20719.jpg' alt='' borderRadius='lg'/>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Iphone 15 Promas 15 GB ram 47 GB</Heading>
      <Text> camara de 8 mega pixeles frontal de doble via y pleno llenado de potencia.</Text>
      <Grid gridTemplateColumns={"65% 35%"}>
        <Text color='blue.600' fontSize='2xl'>$4.500.000</Text>
        <Text bg={"#ffd775"} margin={"2"} textAlign={"center"} color={"gray"} borderRadius={"5px"}>-25%</Text>
      </Grid>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>Comprar</Button>
      <Button variant='solid' colorScheme='blue'>Al carrito </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  );
}