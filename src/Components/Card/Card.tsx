import { Card, CardBody,Image,Stack, Text,Divider,Heading,CardFooter,ButtonGroup,Button, Grid, Link } from "@chakra-ui/react"
import React  from 'react';
export function MyCard({Products}) {
  return (    
    <div id="cards">
      {   
            <Card maxW='sm'>
              <CardBody bg={"transparent"}>
                <Image src= {Products[10]} alt='' borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{Products[0]}</Heading>
                  <Text> {Products[1]}</Text>
                  <Grid gridTemplateColumns={"65% 35%"}>
                  <Text color='blue.600' fontSize='2xl'>{`$${Products[2]}`}</Text>
                    {
                      Products[4]==="0"?null:
                      <Text bg={"#ffd775"} margin={"2"} textAlign={"center"} color={"gray"} borderRadius={"5px"}>{`-${Products[4]}%`}</Text>
                    }
                  </Grid>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Link href="/5d"> <Button variant='solid' colorScheme='blue'>Comprar</Button></Link> <br />
                  <Button variant='solid' colorScheme='blue'>Al carrito </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
      }
      </div>
  )
}